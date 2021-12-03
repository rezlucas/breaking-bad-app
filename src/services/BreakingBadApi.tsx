import axios from "axios";

class BreakingBadApi {
  breakingbadurl = "https://www.breakingbadapi.com/api/characters";

  async getListCharacters() {
    return await (
      await axios(this.breakingbadurl)
    ).data;
  }
}

export default new BreakingBadApi();
