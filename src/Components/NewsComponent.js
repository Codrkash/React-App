import React, { Component } from "react";
import NewsItem from "./NewsItem";
import spinnner from "./loader3.gif";
import "./NewsComponent.css";
export class NewsComponent extends Component {
  // props = this.props;
  articles = [
    // {
    //   source: {
    //     id: null,
    //     name: "CBS Sports",
    //   },
    //   author: "",
    //   title:
    //     "NFL Week 5 odds, picks, how to watch, streaming: Expert picks, survivor picks, best bets, teasers, and more - CBS Sports",
    //   description:
    //     "CBSSports.com and SportsLine break down every single NFL game in Week 5",
    //   url: "https://www.cbssports.com/nfl/news/nfl-week-5-odds-picks-how-to-watch-streaming-expert-picks-survivor-picks-best-bets-teasers-and-more/",
    //   urlToImage:
    //     "https://sportshub.cbsistatic.com/i/r/2022/10/07/9a8b646e-6a27-4c66-9b96-03ff95a1b6a4/thumbnail/1200x675/8d545e643c57cd62dbe427f170a18920/joe-burrow-cbs-usatsi-bengals.jpg",
    //   publishedAt: "2022-10-09T11:33:00Z",
    //   content:
    //     "Week 5 of the 2022 NFL regular season is chock-full of storylines. Daniel Jones and Co. are in London, as the Giants will look to register an upset victory over Aaron Rodgers and the Packers, Patriot… [+16995 chars]",
    // },
    // {
    //   source: {
    //     id: "politico",
    //     name: "Politico",
    //   },
    //   author: null,
    //   title:
    //     "Trump's legal drama is nowhere in the campaign ad wars - POLITICO",
    //   description:
    //     "Candidates in swing districts are focused on abortion and the economy, not the FBI search of the former president’s home or a lawsuit against him in New York.",
    //   url: "https://www.politico.com/news/2022/10/09/trump-legal-issues-midterm-ad-buys-00059841",
    //   urlToImage:
    //     "https://static.politico.com/cb/88/122a56214be2bc66671f90d1e4d7/election-2022-trump-ads-07966.jpg",
    //   publishedAt: "2022-10-09T11:00:00Z",
    //   content:
    //     "Obviously there are a lot of concerns with the presidents conduct. But this election is about putting people over politics, about what weve achieved for the American people and whats left to do, and … [+4414 chars]",
    // },
    // {
    //   source: {
    //     id: "reuters",
    //     name: "Reuters",
    //   },
    //   author: null,
    //   title:
    //     "Russian divers to check damage to blast-hit Crimea bridge - Reuters.com",
    //   description:
    //     "Russian divers were to examine on Sunday the damage from a powerful blast on a road-and-rail bridge to Crimea that is an imposing symbol of Moscow's annexation of the peninsula and a key supply route to its forces battling in southern Ukraine.",
    //   url: "https://www.reuters.com/world/europe/russias-ria-state-agency-reports-fuel-tank-fire-kerch-bridge-crimea-2022-10-08/",
    //   urlToImage:
    //     "https://www.reuters.com/resizer/tjXCsWWoIjw21ZPIBICa_0V9qkg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MLCSNOW3SZPS3HIJSCMOH245WE.jpg",
    //   publishedAt: "2022-10-09T10:37:00Z",
    //   content:
    //     "KYIV, Oct 9 (Reuters) - Russian divers were to examine on Sunday the damage from a powerful blast on a road-and-rail bridge to Crimea that is an imposing symbol of Moscow's annexation of the peninsul… [+4266 chars]",
    // },
    // {
    //   source: {
    //     id: "the-washington-post",
    //     name: "The Washington Post",
    //   },
    //   author: "Rachel Pannett, Jennifer Hassan",
    //   title: "Russia-Ukraine war latest updates - The Washington Post",
    //   description:
    //     "A series of overnight strikes on Zaporizhzhia killed at least 12 people, destroying homes. President Volodymyr Zelensky called the attacks « absolute evil. »",
    //   url: "https://www.washingtonpost.com/world/2022/10/09/russia-ukraine-war-latest-updates/",
    //   urlToImage:
    //     "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/J7OJAKCG6ZLTFYO575KMLAX7KE.JPG&w=1440",
    //   publishedAt: "2022-10-09T09:21:00Z",
    //   content:
    //     "Return to menuPutins bridge of dreams explodes in flames:In 2018, when Putin crossed the Crimean Bridge a 12-mile span of steel and concrete connecting the peninsula he seized from Ukraine to mainlan… [+767 chars]",
    // },
    // {
    //   source: {
    //     id: "usa-today",
    //     name: "USA Today",
    //   },
    //   author: "Kevin Johnson, David Jackson",
    //   title:
    //     "Midterm elections 2022: Poll workers fear trouble after Trump chaos - USA TODAY",
    //   description:
    //     "Philadelphia election workers and others across the U.S. drew Trump's wrath in 2020. Now security is the new national challenge this midterm election.",
    //   url: "https://www.usatoday.com/story/news/politics/2022/10/09/midterm-elections-2022-poll-workers-fears/10460917002/",
    //   urlToImage:
    //     "https://www.gannett-cdn.com/presto/2022/10/06/USAT/cd3df1b2-373f-490b-b73e-52c865b0857f-Deely.jpg?crop=1023,576,x0,y94&width=1023&height=576&format=pjpg&auto=webp",
    //   publishedAt: "2022-10-09T09:00:19Z",
    //   content:
    //     '<ul><li>Election workers in the U.S. have faced threats and fear intimidation from conservative activists.</li><li>Republicans and conservative groups plan to flood the elections with thousands of "p… [+735 chars]',
    // },
    // {
    //   source: {
    //     id: "cnn",
    //     name: "CNN",
    //   },
    //   author: "Gene Norman, Zoe Sottile",
    //   title:
    //     "Hurricane Julia makes landfall in Nicaragua as a Category 1 storm - CNN",
    //   description:
    //     "Tropical Storm Julia is now categorized as a hurricane with maximum sustained winds of 75 mph, according to the National Hurricane Center on Saturday.",
    //   url: "https://www.cnn.com/2022/10/08/world/julia-category-1-hurricane/index.html",
    //   urlToImage:
    //     "https://media.cnn.com/api/v1/images/stellar/prod/221008190537-01-hurricane-julia-honduras-221008.jpg?c=16x9&q=w_800,c_fill",
    //   publishedAt: "2022-10-09T08:02:00Z",
    //   content:
    //     "Hurricane Julia made landfall in Nicaragua early Sunday as a Category 1 storm, the National Hurricane Center said.\r\nThe storm had sustained winds of 85 mph when it moved onshore near Laguna de Perlas… [+877 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "TMZ",
    //   },
    //   author: "TMZ Staff",
    //   title:
    //     "Actor Ray Buffer Accused of Stealing Comics, Store Says It's on Video - TMZ",
    //   description:
    //     "Actor Ray Buffer is being accused of stealing comics from a store in San Diego, and it appears to be caught on video.",
    //   url: "https://www.tmz.com/2022/10/09/actor-ray-buffer-accused-stealing-comics-video/",
    //   urlToImage:
    //     "https://imagez.tmz.com/image/48/16by9/2022/10/07/484bb4213e06498598e39c43adfd268b_xl.jpg",
    //   publishedAt: "2022-10-09T08:00:00Z",
    //   content:
    //     "Actor Ray Buffer is being accused by a San Diego comic book store of stealing some pricey comics ... and the store says security footage appears to show him stuffing 'em up his shirt.\r\nSouthern Calif… [+1271 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "ESPN",
    //   },
    //   author: "Adam Rittenberg",
    //   title:
    //     "'He ain't SWAC' - Disrespected Alabama State's Eddie Robinson Jr. snubs Deion Sanders' attempted postgame hug - ESPN",
    //   description:
    //     "Alabama State coach Eddie Robinson Jr. took Jackson State coach Deion Sanders' hand following Alabama State's 26-12 loss to Jackson State, but wanted no part of an embrace with Sanders, instead shoving him with his left hand as he walked away.",
    //   url: "https://www.espn.com/college-football/story/_/id/34757787/he-aint-swac-disrespected-alabama-state-eddie-robinson-jr-snubs-deion-sanders-attempted-postgame-hug",
    //   urlToImage:
    //     "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0801%2Fr1042905_1296x729_16%2D9.jpg",
    //   publishedAt: "2022-10-09T06:24:58Z",
    //   content:
    //     "When Jackson State coach Deion Sanders and Alabama State coach Eddie Robinson Jr. met at midfield after Saturday's game, the exchange ended with Robinson pushing away the Pro Football Hall of Famer.\r… [+3365 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "WABC-TV",
    //   },
    //   author: null,
    //   title:
    //     "NYC Crime: Suspect arrested in unprovoked stabbing death in Bronx subway station - WABC-TV",
    //   description:
    //     "Police have made an arrest in the deadly, unprovoked stabbing of a man in the subway on Thursday.",
    //   url: "https://abc7ny.com/subway-crime-slashing-saquan-lemons-charles-moore/12306010/",
    //   urlToImage:
    //     "https://cdn.abcotvs.com/dip/images/12302315_100722-wabc-subway-attack-bronx-img.jpg?w=1600",
    //   publishedAt: "2022-10-09T06:05:23Z",
    //   content:
    //     "MORRIS HEIGHTS, Bronx (WABC) -- Police have made an arrest in the deadly stabbing of a man in a Bronx subway station on Thursday.\r\nSaquan Lemons, 27, of the Bronx was arrested Saturday afternoon on c… [+2583 chars]",
    // },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
      loading: true,
      results: this.totalResults,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=291c7235d7334846a451f4942a439414&page=1&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    let data = await fetch(url);
    let parsData = await data.json();
    console.log(parsData);
    this.setState({
      articles: parsData.articles,
      loading: false,
      results: parsData.totalResults,
    });
  }

  previousPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=291c7235d7334846a451f4942a439414&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsData.articles,
      loading: false,
    });
  };
  nextPage = async () => {
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=291c7235d7334846a451f4942a439414&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Top Headlines</h1>
        {/* <spinner /> */}
        {this.state.loading && (
          <div className="container text-center">
            <img src={spinnner} alt="Loading" className="gif" />
          </div>
        )}
        <div className="container row">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4">
                <NewsItem
                  title={element.title ? element.title.slice(0, 30) : " "}
                  description={
                    element.description ? element.description.slice(0, 88) : " "
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://c.ndtvimg.com/2022-10/0ctfdk4g_salman-khan_625x300_09_October_22.jpg"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previousPage}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark mx-3"
            onClick={this.nextPage}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.results / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
