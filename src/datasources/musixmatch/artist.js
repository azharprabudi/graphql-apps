const { RESTDataSource } = require("apollo-datasource-rest");

class ArtistDatasource extends RESTDataSource {
  constructor({ baseURL, apiKey }) {
    super();
    this.apiKey = apiKey;
    this.baseURL = baseURL;
  }

  willSendRequest(req) {
    req.params.append("apikey", this.apiKey);
  }

  async findArtistById(id) {
    const rawResp = await this.get("artist.get", {
      artist_id: id
    });
    const resp = JSON.parse(rawResp);

    return this.findArtistByIdReducer(resp.message.body.artist);
  }

  findArtistByIdReducer(resp) {
    return {
      id: resp.artist_id,
      mbId: resp.artist_mbid,
      name: resp.artist_name,
      country: resp.country_name,
      aliases: resp.artist_alias_list,
      rating: resp.artist_rating,
      twitterURL: resp.artist_twitter_url,
      updatedTime: resp.updated_time
    };
  }
}

module.exports = ArtistDatasource;
