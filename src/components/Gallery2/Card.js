import './gallery2.css'

const style = {
    color: '#ffb503'
};

function Card(props) {
    return (
        <div className="card2">
            <div>
                <img src={props.gallery} alt="" />
            </div>
            <div className="card_desc">
                <div>{props.title}</div>
                <div className="text_desc">
                    <div>
                        <p className="col-5" style={style}>Product Code:</p>
                        <p className="col-5">{props.code}</p>
                    </div>
                    <div>
                        <p className="col-5" style={style}>Avaliability:</p>
                        <p className="col-5">In Stock</p>
                    </div>
                    <div>
                        <p className="col-5" style={style}>Artist:</p>
                        <p className="col-5">ABDUL QADER AL RAIS</p>
                    </div>
                    <div>
                        <p className="col-5" style={style}>Details:</p>
                    </div>
                    <div className="buttons">
                        <div className="view">View &nbsp;&nbsp;<i className="fa fa-arrow-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;