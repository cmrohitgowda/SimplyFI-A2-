import "../App.css";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
}
