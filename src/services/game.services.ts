import { gameRepository } from "../repositories/game.repository";

async function getGameService(){
    const result = await gameRepository.getGamesDB();
    return result.rows
}

async function createGameService(){
    
}

export const gameService = { getGameService, createGameService };
