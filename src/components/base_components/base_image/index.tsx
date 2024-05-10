/** REACT */
import React from 'react';

/** STYLE */
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {style} from './style';

interface BaseImageProps extends FastImageProps {
  imageURL: string;
  height: number;
  width: number;
  borderRadius?: number;
}

const BaseImage: React.FC<BaseImageProps> = props => {
  const {imageURL, height, width, borderRadius} = props;
  const viewStyle = style(height, width, borderRadius ?? 0);

  const getImageSource = React.useCallback(
    (imgUrl: string) => {
      if (imgUrl) {
        return {uri: imageURL ?? ''};
      } else {
        return require('assets/images/profile-placeholder.jpeg');
      }
    },
    [imageURL],
  );

  return (
    <FastImage
      style={viewStyle.mainContainer}
      source={getImageSource(imageURL)}
    />
  );
};

export const BaseImageView = React.memo(BaseImage);
