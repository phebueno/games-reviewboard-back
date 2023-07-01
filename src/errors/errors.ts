export function notFoundErr(obj) {
    return {
      type: "NotFoundErr",
      message: `O jogo de ID ${obj} não está presente!`,
    };
  }