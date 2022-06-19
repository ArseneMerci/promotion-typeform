import Card from "../card";

const StepOne = () => {
    return (
        <div className="container step-container">
            <div className="row">
                <div className="col-lg-4 col-md-4 flex-center">
                    <Card />
                </div>
                <div className="col-lg-4 col-md-4 flex-center">
                    <Card />
                </div>
                <div className="col-lg-4 col-md-4 flex-center">
                    <Card />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 flex-center">
                    <Card />
                </div>
                <div className="col-lg-4 col-md-4 flex-center">
                    <Card />
                </div>
                <div className="col-lg-4 col-md-4 flex-center">
                    <Card />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 flex-center">
                    <Card />
                </div>
                <div className="col-lg-4 col-md-4 flex-center">
                    <Card />
                </div>
                <div className="col-lg-4 col-md-4 flex-center">
                    <Card />
                </div>
            </div>
        </div>
    );
};
export default StepOne;
