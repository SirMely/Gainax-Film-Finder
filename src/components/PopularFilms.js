import React, { useState } from "react";
import YouTube from "react-youtube";
import "./PopularFilms.css";
import NeonGen from "../assets/images/NeonYT-Thumbnail.jpg";
import RoyalSpace from "../assets/images/Royal-SpaceYT Thumbnail.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";

function PopularFilms() {
    const [modalData, setModalData] = useState({ isOpen: false, videoId: "" });

    const opts = {
        height: "400",
        width: "600",
        playerVars: {
            autoplay: 1,
            controls: 1,
        },
    };

    const videoCards = [
        {
            id: 1,
            videoId: "dHBq54SVQGU",
            thumbnail: NeonGen,
            title: "Neon Genesis Evangelion",
            description:
                "Dive into the world of Evangelion with this epic trailer. Experience the action, drama, and stunning visuals that have captivated fans worldwide.",
        },
        {
            id: 2,
            videoId: "TdYgZov_1uk", // Replace with another video ID
            thumbnail: RoyalSpace,
            title: "Royal Space Force",
            description:
                "Witness the awe-inspiring journey of Royal Space Force. Experience the ambition, sacrifice, and breathtaking visuals as one man dares to dream of humanity's first steps into the cosmos.",
        },
    ];

    return (
        <div className="video-container">
            {videoCards.map((card) => (
                <div key={card.id} className="video-content">
                    {/* Thumbnail + Text Card */}
                    <div
                        className="video-thumbnail"
                        onClick={() =>
                            setModalData({ isOpen: true, videoId: card.videoId })
                        }
                    >
                        <img src={card.thumbnail} alt={`${card.title} Thumbnail`} />
                        <div className="play-button">
                            <FontAwesomeIcon icon={faPlay} size="6x" color="white" />
                        </div>
                    </div>

                    {/* Text Card */}
                    <div className="text-card">
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}

            {/* Modal View */}
            {modalData.isOpen && (
                <div className="video-modal">
                    <div className="video-modal-content">
                        {/* Close Button */}
                        <button
                            className="close-button"
                            onClick={() => setModalData({ isOpen: false, videoId: "" })}
                        >
                            <FontAwesomeIcon icon={faTimes} size="2x" />
                        </button>
                        {/* YouTube Player */}
                        <YouTube videoId={modalData.videoId} opts={opts} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopularFilms;
