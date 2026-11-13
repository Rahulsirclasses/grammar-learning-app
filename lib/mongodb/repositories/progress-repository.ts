
import { ProgressModel } from "../models/progress";
import { PracticeQuestionModel } from "../models/practice-question";
import { connectToMongoDB } from "../mongodb";

export interface UserStats {
    totalXp: number;
    accuracy: number;
    streak: number;
    topicsMastered: number;
    totalTopics: number;
    testsCompleted: number;
}

export async function getUserStats(userId: string): Promise<UserStats> {
    await connectToMongoDB();

    // In a real app, this would be aggregated from multiple collections.
    // For now, we'll store/fetch it from the 'progress' collection for the user.
    const progress = await ProgressModel.findOne({ user_id: userId });

    if (!progress) {
        return {
            totalXp: 0,
            accuracy: 0,
            streak: 0,
            topicsMastered: 0,
            totalTopics: 12, // Default or fetch count
            testsCompleted: 0
        };
    }

    return {
        totalXp: progress.total_xp || 0,
        accuracy: progress.accuracy || 0,
        streak: progress.streak || 0,
        topicsMastered: progress.topics_mastered || 0,
        totalTopics: 12,
        testsCompleted: progress.tests_completed || 0
    };
}

export async function savePracticeResult(userId: string, data: {
    topicId: string;
    score: number;
    totalQuestions: number;
    xpEarned: number;
}) {
    await connectToMongoDB();

    // 1. Update/Create user performance doc
    const progress = await ProgressModel.findOneAndUpdate(
        { user_id: userId },
        {
            $inc: {
                total_xp: data.xpEarned,
                total_correct: data.score,
                total_attempted: data.totalQuestions
            },
            $set: { last_activity: new Date() }
        },
        { upsert: true, new: true }
    );

    // Recalculate accuracy
    const accuracy = Math.round((progress.total_correct / progress.total_attempted) * 100);
    await ProgressModel.updateOne({ user_id: userId }, { $set: { accuracy } });

    return progress;
}

export async function getQuestionsByTopic(topic: string, type?: string) {
    await connectToMongoDB();
    const filter: any = { topic };
    if (type) filter.type = type;

    return await PracticeQuestionModel.find(filter);
}
