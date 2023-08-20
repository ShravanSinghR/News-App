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
            //     {"title":"PDP chief Mehbooba reacts to Ghulam Nabi Azad's 'majority of Muslims in India have converted from Hinduism'
            //     remarks","description":"Ghulam Nabi Azad sparks controversy by saying the majority of Indian Muslims converted from
            //     Hinduism, cites Kashmir as example","content":"Democratic Progressive Azad Party (DPAP) chairman Ghulam Nabi Azad has
            //     sparked a controversy by saying that a majority of Indian Muslims have converted from Hinduism, reported news agency
            //     PTI. Explaining his statement, he said that an example of this... [1290
            //     chars]","url":"https://www.livemint.com/politics/news/pdp-chief-reacts-to-ghulam-nabi-azads-majority-of-muslims-in-india-have-converted-from-hinduism-remarks-11692320558348.html""","image:"https://www.livemint.com/lm-img/img/2023/08/18/600x338/Ghulam_Nabi_Azad_1692322906958_1692322907187.jpg","publishedAt":"2023-08-17T18:30:00Z","source":{"name":"Livemint","url":"https://www.livemint.com"}},
            //     {"title":"Express
            //     View on Bindeshwar Pathak: Thank You Mr Pathak","description":"His innovations freed many people from the practice of
            //     manual scavenging. Sulabh toilets were an example of using technology for social upliftment at the most elementary
            //     level","content":"In the late 1960s, the Gandhi Centenary Committee in Patna sent a young volunteer to work amidst the
            //     Dalit community in Bettiah. The volunteer Bindeshwar Pathak braved humiliation and ridicule from members of the Brahmin
            //     caste he was born into to spe... [2882
            //     chars]","url":"https://indianexpress.com/article/opinion/editorials/express-view-on-bindeshwar-pathak-thank-you-mr-pathak-8895795/","image":"https://images.indianexpress.com/2023/08/edit-8.jpg","publishedAt":"2023-08-17T01:00:15Z","source":{"name":"The
            //     Indian Express","url":"https://indianexpress.com"}},
            //     {"title":"4,000 and growing: List of people awaiting organ donation
            //     in Mumbai gets longer","description":"Rahul Ahirwar, 24, the first patient to undergo hand transplant at civic-run
            //     Parel’s KEM hospital, is a living example of how such initiatives at the government-level can give new lease of life to
            //     many.","content":"Sejal Jobanputra, 45, is on dialysis since 2007 when her first kidney transplant failed. After years
            //     of waiting on the list for a donor, she finally withdrew her name from the list in 2018. “Years of dialysis have taken a
            //     toll on my body… now I am no... [755
            //     chars]","url":"https://indianexpress.com/article/cities/mumbai/4000-and-growing-list-of-people-awaiting-organ-donation-in-mumbai-gets-longer-8894298/","image":"https://images.indianexpress.com/2023/08/ORGAN-DORNORT.jpg","publishedAt":"2023-08-16T00:15:11Z","source":{"name":"The
            //     Indian Express","url":"https://indianexpress.com"}},
            //     {"title":"Ravi Shankar Prasad: Changes in criminal laws will ensure
            //     speedy justice","description":"Lauding Union Home Minister Amit Shah’s statement in the Lok Sabha that the offence of
            //     sedition is repealed, Prasad said, “The law has to evolve and progress with time. Sedition is a classic example of
            //     continuing colonial legacy.”","content":"The mandatory video recording of search and seizure operations by police, and
            //     statutory timelines for trial in the government’s overhaul of colonial-era criminal laws will provide speedy justice and
            //     make police more accountable, said former Union min... [791
            //     chars]","url":"https://indianexpress.com/article/india/ravi-shankar-prasad-changes-in-criminal-laws-will-ensure-speedy-justice-8891296/","image":"https://images.indianexpress.com/2023/08/ravi-shankar.jpg","publishedAt":"2023-08-13T21:27:56Z","source":{"name":"The
            //     Indian Express","url":"https://indianexpress.com"}}
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
        const url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&apikey=290687131fd1c441a70e050337692ac8&page=${this.state.page + 1}&max=${this.props.pageSize}`;
        // https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&apikey=290687131fd1c441a70e050337692ac8&page=${this.state.page+1}&pageSize=${this.props.pageSize}

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
        const url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&apikey=290687131fd1c441a70e050337692ac8&page=${this.state.page - 1}&max=${this.props.pageSize}`;
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
        const url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&apikey=290687131fd1c441a70e050337692ac8&page=${this.state.page + 1}&max=${this.props.pageSize}`;
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
                <h1 className='text-center' style={{ fontSize: "6vh", marginTop: "70px" }}>Top {this.props.category.slice(0, 1).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state?.articles?.map((element) => {
                        console.log(this.state, ("State"),);
                        console.log(this.state.articles, "Article");

                        return <div className='col-md-4 d-flex justify-content-centre' key={element.url} >
                            <NewsItem title={element?.title ? element?.title.slice(0, 40) + "..." : " "}
                                description={element?.content ? element?.content.slice(0, 100) + "..." : " "}
                                imageUrl={element?.image} newsUrl={element?.url} date={element?.publishedAt} source={element?.source?.name} material={this.props.material} />
                        </div>
                    })}
                </div>
                {/* <div className='container d-flex justify-content-between my-4'>
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.PrevClick}>&laquo; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.NextClick}>Next &raquo;</button>
                </div> */}
            </div>
        )
    }
}

export default News

