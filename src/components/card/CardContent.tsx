import { ReactComponent as RQ } from "../../assets/rq.svg";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as Wrench } from "../../assets/wrench.svg";
import { getRqThemeClass, getRqSymbol, valueToNumber } from "../../utils/utils";
import "./CardContent.css";
import CardBlurry from "./CardBlurry";
import type { FormsData } from "../../App";

interface CardContentI {
    formData: FormsData;
    exporting: boolean;
}

const CardContent = ({ formData, exporting }: CardContentI) => {
    const topSpeed = valueToNumber(formData.topSpeed);
    let zeroToSixty: string | number = valueToNumber(formData.zeroToSixty);
    zeroToSixty = zeroToSixty == 0 ? "N/A" :zeroToSixty.toFixed(1);
    const handling = valueToNumber(formData.handling);
    const rq = valueToNumber(formData.rq);
    const fuses = valueToNumber(formData.fuses);
    const tyres = formData.tyres.toUpperCase();
    const drivetrain = formData.drivetrain;
    const drivetrain1 = drivetrain.charAt(0);
    const drivetrain2 = drivetrain.slice(1);

    return (
        <div className={`card-content ${getRqThemeClass(rq)}`}>
            { /* Right side */ }
            <div className={ exporting ? "right-side render" : "right-side" }>
                { exporting && (
                    <div className="blur">
                        <CardBlurry formData={formData} top={-95} left={-1280 + 263} />
                    </div>
                )}
                <div className="box-container">
                    <div className="box">
                        <div className="values">
                            <span className="value">{topSpeed}</span>
                            <span className="label">TOP SPEED</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="values">
                            <span className="value">{zeroToSixty}</span>
                            <span className="label">0-60MPH</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="values">
                            <span className="value">{handling}</span>
                            <span className="label">HANDLING</span>
                        </div>
                    </div>
                    <div className="box bottom">
                        <div className="values">
                            <div className="fade"></div>
                            <span className="value"><b>{drivetrain1}</b>{drivetrain2}</span>
                            <span className="label">DRIVE</span>
                        </div>
                    </div>
                </div>
            </div>

            { /* Left side */ }
            <div className="left-side">
                <div className="top">
                    <div className="right"></div>
                    <div className="middle"></div>
                    <div className="left"></div>
                    <span className="value">{getRqSymbol(rq)}</span>
                </div>
                <div className="bottom">
                    <span className="value">{rq}</span>
                    <RQ className="label" />
                </div>
            </div>

            { /* Tyres */ }
            <div className="tyres-label">
                <span>Tyres</span>
            </div>
            <div className="tyres-value">
                <span>{tyres}</span>
            </div>

            { /* Stars */ }
            <div className="stars">
                {[...Array(3)].map((_, i) => (
                    <Star key={i} className={i < fuses ? "star visible" : "star"} />
                ))}
            </div>

            { /* Wrench */ }
            <div className="wrench">
                <Wrench />
            </div>
        </div>
    )
}
export default CardContent;