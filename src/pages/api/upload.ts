import type { NextApiRequest, NextApiResponse } from "next"
import { IncomingForm, File } from "formidable"
import fs from "fs"
import path from "path"

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const uploadDir = path.join(process.cwd(), 'public/images/uploads')
  fs.mkdirSync(uploadDir, { recursive: true })

  const form = new IncomingForm({
    uploadDir,
    keepExtensions: true,
    filename: (_name, _ext, part) => part.originalFilename || `${Date.now()}_${part.originalFilename}`,
  })

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Form parse error:', err)
      return res.status(500).json({ error: 'Error parsing the file' })
    }

    const uploadedFile = files.file as File | File[]
    const file = Array.isArray(uploadedFile) ? uploadedFile[0] : uploadedFile
    const relativePath = `/images/uploads/${file.originalFilename}`

    return res.status(200).json({ path: relativePath })
  })
}
