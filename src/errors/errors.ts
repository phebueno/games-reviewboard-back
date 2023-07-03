export function notFoundErr(obj) {
    return {
      type: "NotFoundErr",
      message: `O jogo de ID ${obj} não está presente!`,
    };
  }

  export function unauthorizedReviewerErr(obj) {
    return {
      type: "UnauthorizedRev",
      message: `Vocẽ não possui reviews para esse jogo!`,
    };
  }