import { ThreeDots } from "react-loader-spinner";

function LoadThreeDots() {
    return (
        <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
            <span>Carregando dados</span>

            <ThreeDots
                height="80"
                width="80"
                color="#D3B48F"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default LoadThreeDots;