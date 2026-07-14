interface Props{
    children: React.ReactNode
}

export default function PopupOverlay({children}:Props){
    return (
        <div className="popup-overlay">
            <div className="popup">{children}</div>
        </div>
    );
}