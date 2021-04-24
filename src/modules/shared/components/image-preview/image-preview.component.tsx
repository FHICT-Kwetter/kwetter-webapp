import React from 'react';
import useStyles from './image-preview.styles';
import { Dialog } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

interface ImageDimensions {
    width: number,
    height: number,
}

interface ImagePreviewProps {
    image: File,
    onRemove: (image: File) => void;
}

interface ImagePreviewPopupProps {
    open: boolean,
    onClose: () => void;
    image: File,
    dimensions: ImageDimensions
}

const ImagePreviewPopup: React.FC<ImagePreviewPopupProps> = (props: ImagePreviewPopupProps) => {

    const { image, dimensions, open, onClose } = props;

    const isImage = (): boolean => {
        if (image.name.match(/.(jpg|jpeg|jpe|jif|jfif|png|gif)$/i)) {
            return true;
        }

        return false;
    }

    return (
        <Dialog open={open} onClose={onClose}>
            {
                isImage() ? (
                    <img src={URL.createObjectURL(image)} width={dimensions.width} height={dimensions.height} style={{
                        maxWidth: '500px',
                        maxHeight: '500px',
                        width: '500px',
                        height: '500px',
                        objectFit: 'contain'
                    }} />
                ) :
                <video controls src={URL.createObjectURL(image)} width={dimensions.width} height={dimensions.height} style={{
                    maxWidth: '500px',
                    maxHeight: '500px',
                    width: '500px',
                    height: '500px',
                    objectFit: 'contain'
                }} />
            }
        </Dialog>
    )
}

const ImagePreview: React.FC<ImagePreviewProps> = (props: ImagePreviewProps) => {

    const [bigPreviewOpen, setBigPreviewOpen] = React.useState<boolean>(false);
    const [imageOverlay, setImageOverlay] = React.useState<boolean>(false);
    const [dimensions, setDimensions] = React.useState<ImageDimensions | undefined>(undefined);

    React.useEffect(() => {
        isImage() ? getImageDimensions() : getVideoDimensions();
    }, []);

    const classes = useStyles();
    const { image, onRemove } = props;

    const isImage = (): boolean => {
        if (image.name.match(/.(jpg|jpeg|jpe|jif|jfif|png|gif)$/i)) {
            return true;
        }

        return false;
    }

    const getImageDimensions = (): Promise<ImageDimensions> | any => {
        const url = URL.createObjectURL(image);
        const img = new Image();

        img.onload = () => {
            setDimensions({
                width: img.width,
                height: img.height,
            });
        }

        img.src = url;
    }

    const getVideoDimensions = (): Promise<ImageDimensions> | any => {
        const url = URL.createObjectURL(image);
        const video = document.createElement('video');

        video.onloadedmetadata = () => {
            setDimensions({
                width: video.width,
                height: video.height,
            });
        }

        video.src = url;
    }

    return (
        <div
            className={classes.previewImageContainer}
            onMouseEnter={() => setImageOverlay(true)}
            onMouseLeave={() => setImageOverlay(false)}
        >

            <CloseIcon className={classes.closeIcon} fontSize='small' onClick={() => onRemove(image)} />
            {
                dimensions !== undefined && isImage() && (
                    <img
                        className={classes.previewImage}
                        src={URL.createObjectURL(image)}
                        width={100}
                        height={100}
                        onClick={() => setBigPreviewOpen(true)}
                    />
                )
            }

            {
                dimensions !== undefined && !isImage() && (
                    <video
                        className={classes.previewImage}
                        src={URL.createObjectURL(image)}
                        width={100}
                        height={100}
                        onClick={() => setBigPreviewOpen(true)}
                    />
                )
            }

            {
                dimensions !== undefined && bigPreviewOpen && (
                    <ImagePreviewPopup
                        open={bigPreviewOpen}
                        onClose={() => setBigPreviewOpen(false)}
                        image={image}
                        dimensions={dimensions}
                    />
                )
            }

        </div>
    )
};

export default ImagePreview;
