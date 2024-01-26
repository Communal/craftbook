import { ManageFeatureOption, ManageFeatures } from '@/components';

export default function ManageFeatureExample() {
  return (
    <ManageFeatures
      title="Account Settings"
      description="User account related settings">
      <ManageFeatureOption isOn={false}>Private Account</ManageFeatureOption>
      <ManageFeatureOption isOn={false}>
        Only followers can see your posts
      </ManageFeatureOption>
      <ManageFeatureOption isOn={false}>
        Show location on profile
      </ManageFeatureOption>
      <ManageFeatureOption isOn={false}>
        Show DOB on profile
      </ManageFeatureOption>
    </ManageFeatures>
  );
}
