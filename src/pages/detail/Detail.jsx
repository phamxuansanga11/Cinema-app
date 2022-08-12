import React from "react";
import { useEffect, useState } from "react";
import "../../scss/Detail.scss";
import CastList from "./CastList";
import tmdbApi from "../../api/tmdbApi";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import BtnDetail from "../../components/button/btnDetail/BtnDetail";
import IfameVideo from "../../components/iframeVideo/IframeVideo";
import Similar from "../../components/similar/Similar";
import Loading from "../../components/loading/Loading";
import AlertError from "../../components/alert/Alert";

function Detail(props) {
  const { category, id } = useParams();

  const [movieDetail, setMovieDetail] = useState();
  const [caster, setCaster] = useState();
  const [iframeVideo, setIframeVideo] = useState();
  const [similar, setSimilar] = useState();
  const [loading, setLoading] = useState(true);
  const [isShowAlert, setIsShowAlert] = useState(false);

  const getDetail = async (category, id) => {
    try {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setMovieDetail(response);
    } catch (error) {
      setIsShowAlert(true);
      console.log("getDetail API called fail...!", error);
    }
  };

  const getCaster = async (category, id) => {
    try {
      const response = await tmdbApi.credits(category, id);
      setCaster(response?.cast.slice(0, 4));
    } catch (error) {
      console.log("getCaster API called fail...!", error);
    }
  };

  const getVideo = async (category, id) => {
    try {
      const response = await tmdbApi.getVideos(category, id);
      setIframeVideo(response?.slice(0, 4));
    } catch (error) {
      console.log("getVideo API called fail...!", error);
    }
  };

  const getSimilarVideo = async (category, id) => {
    try {
      const response = await tmdbApi.similar(category, id);
      setSimilar(response);
      setLoading(false);
    } catch (error) {
      console.log("getSimilarVideo API called fail...!", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getDetail(category, id);
    getCaster(category, id);
    getVideo(category, id);
    getSimilarVideo(category, id);
  }, [category, id]);

  return loading ? (
    <>
      <Loading />
      {isShowAlert && <AlertError />}
    </>
  ) : (
    <>
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
              <CastList caster={caster} />
            </div>
          </div>
          {iframeVideo?.map((item, idx) => (
            <IfameVideo key={idx} data={item} />
          ))}
          <Similar similar={similar} />
        </div>
      </div>
    </>
  );
}

export default Detail;
