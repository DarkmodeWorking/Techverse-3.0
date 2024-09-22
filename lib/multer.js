
import multer from 'multer';
import { NextResponse } from 'next/server';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
export const upload = multer({ storage })

  export const multerMiddleware = (req, res) => {
    return new Promise((resolve, reject) => {
      upload.single("screenShot")(req, res, function (err) {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  };
