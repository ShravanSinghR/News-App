import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, date, source,material} = this.props;
        return (
            <div className='my-3'>
                <div className="card">

                    <img src={imageUrl ? imageUrl : "https://cdn.friendsoftheearth.uk/sites/default/files/styles/hero_image/public/media/images/art-attachment-background-boat-40906.jpeg?itok=mQP6NcPZ"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}<span className="position-absolute top-0  translate-middle badge rounded-pill "
                        style={{left:"50%",zIndex:"1" , backgroundColor: this.props.material}}>
                            {source}
                        </span></h5>
                        <p className="card-text">{description}.</p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-warning">Read More</a>
                        <p className="card-text mt-2 "><small className="text-body-secondary">Publiished at {new Date(date).toGMTString()}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
