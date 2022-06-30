import ImageUploading from "react-images-uploading";
import Button from "@mui/material/Button";
import ImagePreview from ".";
import { useState } from "react";
const ImageUploads = ({ onChange, maxNumber,images}) => {
    return (
        <div>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <Button
                            variant="outlined"
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                        </Button>
                        &nbsp;
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={onImageRemoveAll}
                        >
                            Remove all images
                        </Button>
                        <div className="imagePreview">
                            {imageList.map((image, index) => (
                                <ImagePreview
                                    image={image}
                                    key={index}
                                    update={() => onImageUpdate(index)}
                                    remove={() => onImageRemove(index)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};
export default ImageUploads;
