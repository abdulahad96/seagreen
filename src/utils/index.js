import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo';
import {SAVED_DIRECTORY} from '../config/Directories';
import RNFetchBlob from 'rn-fetch-blob';

class Utils {
  isNetConnected() {
    let isNetConnected = false;
    NetInfo.addEventListener((state) => {
      isNetConnected = state.isConnected;
    });
    return isNetConnected;
  }

  showToast(message) {
    return Toast.show(message, Toast.SHORT, Toast.BOTTOM);
  }

  createDirectory() {
    RNFetchBlob.fs.isDir(`${SAVED_DIRECTORY}`).then((exists) => {
      if (exists) {
        return `${SAVED_DIRECTORY}`;
      } else {
        return RNFetchBlob.fs.mkdir(`${SAVED_DIRECTORY}`);
      }
    });
  }
}
export default new Utils();
