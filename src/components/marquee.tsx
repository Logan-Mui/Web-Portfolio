import "../styles/community/marquee.css";

function marquee_collection() {
    return(
        <div className="marquee-text">
            <Marquee />
            <Marquee_Backwards_Slow />
            <Marquee_Slower />
            <Marquee_Backwards />
            <Marquee_Slow />
            <Marquee_Backwards_Slow />
        </div>

    )
}

export function Marquee() {
    return(
        <div className="marquee-text-track">
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
        </div>
    )
}

function Marquee_Slow() {
    return(
        <div className="marquee-text-track slow">
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
        </div>
    )
}

function Marquee_Slower() {
    return(
        <div className="marquee-text-track slower">
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
        </div>
    )
}

function Marquee_Backwards() {
    return(
        <div className="marquee-text-track">
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
        </div>
    )
}

function Marquee_Backwards_Slow() {
    return(
        <div className="marquee-text-track">
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
            <p aria-hidden="true">Community</p>
        </div>
    )
}

export default marquee_collection;