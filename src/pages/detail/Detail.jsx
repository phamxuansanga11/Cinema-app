import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../scss/Detail.scss";
import CastList from "./CastList";
import tmdbApi from "../../api/tmdbApi";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import BtnDetail from "../../components/button/btnDetail/BtnDetail";
import IfameVideo from "../../components/iframeVideo/IframeVideo";
import Similar from "../../components/similar/Similar";

function Detail(props) {
  const { category, id } = useParams();

  const [movieDetail, setMovieDetail] = useState();
  const [caster, setCaster] = useState();
  const [iframeVideo, setIframeVideo] = useState();
  const [similar, setSimilar] = useState();
  // const location = useLocation();

  const getDetail = async (category, id) => {
    const response = await tmdbApi.detail(category, id, { params: {} });
    setMovieDetail(response);
    window.scrollTo(0, 0);
  };

  const getCaster = async (category, id) => {
    const response = await tmdbApi.credits(category, id);
    setCaster(response);
    window.scrollTo(0, 0);
  };

  const getVideo = async (category, id) => {
    const response = await tmdbApi.getVideos(category, id);
    setIframeVideo(response);
    window.scrollTo(0, 0);
  };

  const getSimilarVideo = async (category, id) => {
    const response = await tmdbApi.similar(category, id);
    setSimilar(response);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getDetail(category, id);
    getCaster(category, id);
    getVideo(category, id);
    getSimilarVideo(category, id);
  }, [category, id]);

  // console.log("data ne`", caster?.cast.slice(0, 4));
  // console.log(iframeVideo?.slice(0, 4));
  // console.log("data cua iframe:", iframeVideo);
  return (
    <div className="detail__page">
      <div
        className="detail__page-banner"
        style={{
          backgroundImage: `url(${apiConfig.originalImage(
            movieDetail?.backdrop_path
          )}
          )`,
        }}
      ></div>
      <div className="container">
        <div className="detail__page-grid">
          <div className="grid__left">
            <img src={apiConfig.w500Image(movieDetail?.poster_path)} alt="" />
          </div>
          <div className="grid__right">
            <h1 className="movie__name">{movieDetail?.original_title}</h1>
            <div className="btn__option">
              {movieDetail?.genres.map((item, idx) => (
                <BtnDetail key={idx} btn={item} />
              ))}
            </div>
            <div className="movie__text">{movieDetail?.overview}</div>
            <CastList caster={caster?.cast.slice(0, 4)} />
          </div>
        </div>
        {iframeVideo?.slice(0, 4).map((item, idx) => (
          <IfameVideo key={idx} data={item} />
        ))}
        <Similar similar={similar} />
      </div>
    </div>
  );
}

export default Detail;
