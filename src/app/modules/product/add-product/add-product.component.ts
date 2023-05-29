import { Component } from '@angular/core';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  image: any = [];
  listImage: any = [];
  constructor(private uploadImageService: UploadImageService) {}
  handleSelectImage = (e: any) => {
    const files = e.target.files;
    if (files.length === 0) {
      return;
    }
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }
    this.uploadImageService.handleUploadImage(formData).subscribe((data) => {
      this.listImage = data;
      this.image = this.listImage.urls[0];
      console.log(this.image.url);
    });
  };
  handleDeteleImage(publicId: string) {
    this.uploadImageService
      .handleDeleteImage(publicId)
      .subscribe((data: Data) => {
        if (data.success) {
          this.image = [];
        }
      });
  }
}
type Data = {
  success?: boolean;
  message?: string;
};
