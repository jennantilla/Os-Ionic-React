import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Welcome to this nifty Ionic React App!</strong>
      <p>Learn more about <a target="_blank" rel="noopener noreferrer" href="https://documentation.onesignal.com/docs/ionic-sdk">OneSignal Ionic methods</a></p>
    </div>
  );
};

export default ExploreContainer;
