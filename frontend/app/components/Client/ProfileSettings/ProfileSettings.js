import withPageTitle from 'HOCs/withPageTitle';
import Settings from './Settings';
import ChangePassword from './ChangePassword';
import styles from './profileSettings.css';
import Api from './Api';
import TenantKey from './TenantKey';
import OptOut from './OptOut';
import Licenses from './Licenses';
import { connect } from 'react-redux';

@withPageTitle('Account - OpenReplay Preferences')
@connect(state => ({
  account: state.getIn([ 'user', 'account' ]),
}))
export default class ProfileSettings extends React.PureComponent {  
  render() {
    const { account } = this.props;
    return (
      <React.Fragment>
        <div className="flex items-center">
          <div className={ styles.left }>
            <h4 className="text-lg mb-4">{ 'Profile' }</h4>
            <div className={ styles.info }>{ 'Your email address is your identity on OpenReplay and is used to login.' }</div>
          </div>
          <div><Settings /></div>
        </div>

        <div className="divider" />

        <div className="flex items-center">
          <div className={ styles.left }>
            <h4 className="text-lg mb-4">{ 'Change Password' }</h4>
            <div className={ styles.info }>{ 'Updating your password from time to time enhances your account’s security.' }</div>
          </div>
          <div><ChangePassword /></div>
        </div>

        <div className="divider" />

        <div className="flex items-center">
          <div className={ styles.left }>
            <h4 className="text-lg mb-4">{ 'Organization API Key' }</h4>
            <div className={ styles.info }>{ 'Your API key gives you access to an extra set of services.' }</div>
          </div>
          <div><Api /></div>
        </div>

        <div className="divider" />

        <div className="flex items-center">
          <div className={ styles.left }>
            <h4 className="text-lg mb-4">{ 'Tenant Key' }</h4>
            <div className={ styles.info }>{ 'For SSO (SAML) authentication.' }</div>
          </div>
          <div><TenantKey /></div>
        </div>

        <div className="divider" />

        <div className="flex items-center">
          <div className={ styles.left }>
            <h4 className="text-lg mb-4">{ 'Data Collection' }</h4>
            <div className={ styles.info }>{ 'Enables you to control how OpenReplay captures data on your organization’s usage to improve our product.' }</div>
          </div>
          <div><OptOut /></div>
        </div>
        { account.license && (
          <>
            <div className="divider" />

            <div className="flex items-center">
              <div className={ styles.left }>
                <h4 className="text-lg mb-4">{ 'License' }</h4>
              </div>
              <div><Licenses /></div>
            </div>
          </>
        )}
      </React.Fragment>
    );
  }
}
