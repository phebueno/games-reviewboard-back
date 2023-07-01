
export type CreateGameReview = Omit<ReviewPreview, "username" | "id" | "createdAt">

export type GameWithReviews = {
    id: number,
    game: string,
    developer: string,
    category: string,
    meanScore: number | null,
    reviews: ReviewPreview[]
}

export type ReviewPreview = {
    username: string,
        id: number,
        userId: number,
        gameId: number,
        revDescription?: string,
        score: number,
        createdAt: string
}