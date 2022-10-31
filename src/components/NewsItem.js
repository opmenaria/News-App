import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card" >
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'flex',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger" >{source} </span>
                </div>
                <img src={!imgUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-primary'>by{!author ? "" : author} on {new Date(date).toLocaleString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem
