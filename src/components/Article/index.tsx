import { useState } from 'react';
import './index.css';

interface IProps {
    title: string,
    desc: string,
    productImg: string,
    imgUser: string,
    userName: string,
    datePost: string,
}

const index = ({ title, desc, userName, datePost, imgUser, productImg }: IProps) => {
    const [active, setActive] = useState(false)
    return (
        <div className='product'>
            <div className="img">
                <img src={productImg} alt="Drawer Image" />
            </div>
            <div className="articleInfo">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="userInfo">
                    <div className="pic">
                        <img src={imgUser} alt="avatar" />
                        <div className="Name">
                            <p>{userName}</p>
                            <span>{datePost}</span>
                        </div>
                    </div>
                    <div className={active ? "share active" : "share"} onClick={() => setActive(!active)}>
                        <img src="./icon-share.svg" alt="" />
                        <div className="shareInfo">
                            <p>SHARE</p>
                            <img src="./icon-facebook.svg" alt="facebook" />
                            <img src="./icon-twitter.svg" alt="twitter" />
                            <img src="./icon-pinterest.svg" alt="pinterest" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
