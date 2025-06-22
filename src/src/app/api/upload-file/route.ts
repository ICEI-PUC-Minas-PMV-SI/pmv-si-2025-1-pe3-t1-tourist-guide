// app/api/upload/route.js
import {NextRequest, NextResponse} from 'next/server';
import { formidable } from 'formidable';
import fs from 'fs';
import path from 'path';
import {v4} from "uuid";
import {writeFile} from "node:fs/promises";

// Define the path to the upload directory
const uploadDir = path.join(process.cwd(), 'public/uploads');

// Ensure the upload directory exists
fs.mkdirSync(uploadDir, { recursive: true });

export async function POST(request: NextRequest) {
  try {
    const fileName = v4();

    // The `parse` method returns a promise when no callback is provided
    const data = await request.formData();

    const file: File | null = data.get('image') as unknown as File;

    const bytes = await file.arrayBuffer();

    // 4. Convert the ArrayBuffer to a Buffer
    const buffer = Buffer.from(bytes);

    // 5. Define the path to save the file
    // We'll save it in the `public/uploads` directory
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    const filePath = path.join(uploadDir, fileName);

    // 6. Write the file to the filesystem
    // Note: fs.promises.writeFile will overwrite the file if it already exists
    await writeFile(filePath, buffer);

    // 7. Return a success response with the file URL
    return NextResponse.json({
      message: 'File uploaded successfully!',
      imageUrl: `/uploads/${fileName}`
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ message: 'Failed to upload file.' }, { status: 500 });
  }
}
