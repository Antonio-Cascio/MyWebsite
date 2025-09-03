import KitchenKingVideo from '../Videos/KitchenKing-Preview.mp4';

function PreviewVideo() {
    return (
      <video controls width="100%">
        <source 
          src={KitchenKingVideo} 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    );
  }

export default PreviewVideo;