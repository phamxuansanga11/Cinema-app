import "./Alert.scss";

function AlertError(props) {
  return (
    <section className="section__alert">
      <p style={{ color: "#000" }} className="notification">
        Không có dữ liệu từ phim này!
      </p>
      <i className="icon">
        <img src={require("../../img/icon-error.png")} alt="len" />
      </i>
    </section>
  );
}

export default AlertError;
