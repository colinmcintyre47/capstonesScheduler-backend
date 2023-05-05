import { db } from "../database";

export const getUserListingsRoute = {
    method: 'GET',
    path: 'api/users/{userId}/listings',
    hander: async (req, h) => {
        const userId = req.params.userId;

        const { results } = await db.query(
            'SELECT * FROM courses WHERE courseID=?',
            [userId],
        );

        return results;
    }

}