import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Chúc mừng sinh nhật Linh!</p>
                    <p>
                    Chúc mừng sinh nhật Linh nhé! Bước vào giảng đường đại học cũng là con đường mới trên hành trình của Linh luôn suôn sẻ, chinh phục những thành tựu bản thân muốn. Cùng với đó tuổi mới  ngày càng xinh đẹp, dễ thương hơn, sống luôn vui vẻ, hạnh phúc, tích cực 🥰🥰🥰.
                    </p>
                    <p>
                      Một lần nữa chúc Linh luôn vững tin tiến về phía trước, thành công trong tương lai không xa và có nhiều dịp gặp nhau hơn!
                    </p>
                    <p style={{ textAlign: "right" }}>Người gửi</p>
                    <p style={{ textAlign: "right" }}>Lương Đức Thiện</p>
                </div>
            </div>

            <div className="title">
                <p>needs more?</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("/img/thanks-letter.png")}>
                    <img src="/img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">thanks</span>
                </button>
                <button className="img-button" onClick={() => openPopup("/img/sad-letter.png")}>
                    <img src="/img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sad</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("/img/happy-letter.png")}>
                    <img src="/img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">happy</span>
                </button>
                <button className="img-button" onClick={() => openPopup("/img/cute-letter.png")}>
                    <img src="/img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">cute</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
