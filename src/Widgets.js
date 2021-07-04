import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './Widgets.css';
function Widgets() {
  const newsArticles = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon className='widgets__articleIcon' />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticles('LinkedInClone is hiring', 'Great news for the react fans')}
      {newsArticles(
        'COVID 19 India updates',
        'India starts to vaccinate people over 18'
      )}
      {newsArticles('Healthy WFH', 'How to do gret during WFH times.')}
      {newsArticles(
        'Cryptocurrency Hypes',
        'Will cryptocurrencies be the future of financial technology?'
      )}
    </div>
  );
}

export default Widgets;
