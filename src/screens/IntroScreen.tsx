type Props = {
    guest: string;
    onClick: ()=> void;
}

export default function IntroScreen({guest, onClick}: Props){
    return (
        <div className="intro-screen" onClick={onClick}>
            <div className="intro-content">
                <h1>You are Invited</h1>
                <h2>{guest} & Partner</h2>
            </div>
            <div>
                Press anywhere to<br />Open The Invitation
            </div>
        </div>
    );
}