import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
// import PropTypes from 'prop-types'


export class News extends Component {

    //props
    // static defaultProps = {
    //     country: "in",
    //     pageSize: 9,
    //     category: "genral",
    //     material: "#DC3545",
    //     totalResults: 0,
    // }

    // static defaultProps = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.bool,
    //     category: PropTypes.string,
    // }


    //Example output
    articles = [
        {
            "source": {
                "id": "next-big-future",
                "name": "Next Big Future"
            },
            "author": "Brian Wang",
            "title": "China Science Preprint Paper Claims Successful LK-99 Replication and Levitation and Expectation of Useful Room Temperature Superconductors | NextBigFuture.com",
            "description": "Huazhong University of Science and Technology has published a preprint paper on Arxiv that claims successful growth and room temperature ambient-pressure",
            "url": "https://www.nextbigfuture.com/2023/08/china-science-preprint-paper-claims-successful-lk-99-replication-and-levitation-and-expectation-of-useful-room-temperature-superconductors.html",
            "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2023/08/Screen-Shot-2023-08-05-at-2.36.04-PM.jpg",
            "publishedAt": "2023-08-05T21:38:56Z",
            "content": "Huazhong University of Science and Technology has published a preprint paper on Arxiv that claims successful growth and room temperature ambient-pressure magnetic levitation.\r\nThe chinese team from H… [+3165 chars]"
        },
        {
            "source": {
                "id": "hacker-news",
                "name": "Hacker News"
            },
            "author": null,
            "title": "bigscience/T0pp · Hugging Face",
            "description": "We’re on a journey to advance and democratize artificial intelligence through open source and open science.",
            "url": "https://huggingface.co/bigscience/T0pp",
            "urlToImage": "https://huggingface.co/front/thumbnails/v2-2.png",
            "publishedAt": "2021-10-18T16:37:20.4140551Z",
            "content": "Model Description\r\nT0* is a series of encoder-decoder models trained on a large set of different tasks specified in natural language prompts. We convert numerous English supervised datasets into prom… [+11344 chars]"
        },
        {
            "source": {
                "id": "hacker-news",
                "name": "Hacker News"
            },
            "author": null,
            "title": "Opening up a physics simulator for robotics",
            "description": "As part of DeepMind's mission of advancing science, we have acquired the MuJoCo physics simulator and are making it freely available for everyone, to support research everywhere.",
            "url": "https://deepmind.com/blog/announcements/mujoco",
            "urlToImage": "https://lh3.googleusercontent.com/jVZ3VN7wwx2dSowqLmhqm0qAzAmcb-1t7ks3HiNnoHknihF5sl9VDEwuCNTSxfx8jFIi7mBQkvHUdnSKXSPgYLNpvCuE4YajJeMnrYA",
            "publishedAt": "2021-10-18T16:07:20.4749314Z",
            "content": "Advancing research everywhere with the acquisition of MuJoCo\r\nWhen you walk, your feet make contact with the ground. When you write, your fingers make contact with the pen. Physical contacts are what… [+1849 chars]"
        },
        {
            "source": {
                "id": "national-geographic",
                "name": "National Geographic"
            },
            "author": "Nadia Drake",
            "title": "How these feuding map-makers shaped our fascination with Mars",
            "description": "One was an artist who loved space. His rival was a bold professional astronomer. Their race to map the red planet sparked decades of science and speculation.",
            "url": "https://www.nationalgeographic.com/science/2021/02/how-feuding-map-makers-shaped-our-fascination-with-mars.html",
            "urlToImage": "https://pmdvod.nationalgeographic.com/NG_Video/788/579/smpost_1612381336455.jpg",
            "publishedAt": "2021-02-17T14:37:21.3706142Z",
            "content": null
        },
        {
            "source": {
                "id": "national-geographic",
                "name": "National Geographic"
            },
            "author": null,
            "title": "Episode 3: Why War Zones Need Science Too",
            "description": "Undaunted by Yemen’s civil war, National Geographic explorer Ella Al-Shamahi searches on the island of Socotra for traces of the earliest known humans to leave Africa.",
            "url": "https://www.nationalgeographic.com/podcasts/overheard/season-5/episode-3-why-war-zones-need-science.html",
            "urlToImage": "https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/podcasts/Overheard/season5/episode3/nationalgeographic_2708459.jpg",
            "publishedAt": "2021-02-17T14:37:20.2759318Z",
            "content": null
        }
    ]

    constructor() {
        super();
        // console.log("working yes");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0,
        }

    }

    async UpdateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=337aee128b584fec9a7d587ccac62949&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let ParseData = await data.json();
        this.setState({
            articles: ParseData.articles,
            totalResults: ParseData.totalResults,
            loading: false,
        });
    }

    async componentDidMount() {
        this.UpdateNews();
    }

    //Next & Prev Clciks
    PrevClick = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=337aee128b584fec9a7d587ccac62949&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let ParseData = await data.json();
        this.setState({
            articles: ParseData.articles,
            totalResults: ParseData.totalResults,
            loading: false,
        });
        this.setState({ page: this.state.page - 1 });
    }

    NextClick = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=337aee128b584fec9a7d587ccac62949&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let ParseData = await data.json();
        this.setState({
            articles: ParseData.articles,
            totalResults: ParseData.totalResults,
            loading: false,
        });
        this.setState({ page: this.state.page + 1 });
    }




    render() {
        return (
            <div className='container '>
                <h1 className='text-center' style={{ fontSize: "6vh" , marginTop:"70px"}}>Top {this.props.category.slice(0, 1).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state?.articles?.map((element) => {
                        console.log(this.state, ("State"),);
                        console.log(this.state.articles,"Article");

                        return <div className='col-md-4 d-flex justify-content-centre' key={element.url} >
                            <NewsItem title={element?.title.slice(0, 40)+"..."}
                                description={element?.description ? element?.description.slice(0, 100) + "..." : " "}
                                imageUrl={element?.urlToImage} newsUrl={element?.url} date={element?.publishedAt} source={element?.source?.name} material={this.props.material} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between my-4'>
                <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.PrevClick}>&laquo; Previous</button>
                <button type="button" disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.NextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News

