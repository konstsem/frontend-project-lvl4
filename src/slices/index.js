import currentChannelId from './activeChannel';
import modal from './modal';
import messages from './messages';
import channels from './channels';

const rootReducer = {
  channels,
  messages,
  currentChannelId,
  modal,
};

export default rootReducer;
