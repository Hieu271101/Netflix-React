import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { PlusOutlined } from '@ant-design/icons'
import { Form, Modal, Upload, message } from 'antd'
import axios from 'axios'

ImageUpload.propTypes = {
  imageList: [],
  limit: PropTypes.number,
}

function ImageUpload({ imageList, limit }) {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState(imageList)

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ margin: 8 }}>Upload</div>
    </div>
  )
  const dummyrequest = async (options) => {
    const { file, onSuccess, onError, onProgress } = options
    const url = 'https://api.cloudinary.com/v1_1/asm-ph13269/image/upload'
    const preset = 'm1lkf3uy'
    const formData = new FormData()
    formData.append('upload_preset', preset)
    formData.append('file', file)
    try {
      const { data } = await axios.post(url, formData, {
        headers: {
          'content-type': 'application/x-www-formencoded',
          'X-Requested-With': 'XMLHttpRequest',
        },
        onUploadProgress: (e) => {
          onProgress({ percent: (e.loaded / e.total) * 100 })
        },
      })
      file.url = data.url
      file.thumbUrl = null
      onSuccess('ok')
    } catch (error) {
      onError({ error })
    }
  }
  const accepts = ['image/gif', 'image/jpeg', 'image/png']

  const handleChange = ({ fileList, file }) => {
    const extensionFile = accepts.map((item) => item.split('image/')[1])
    if (file.size / 1024 / 1024 > 2) {
      message.error('Image must be less than 2MB')
      return
    } else if (!accepts.includes(file.type)) {
      message.error(
        `Image must be in these types of extension: ${extensionFile.join(
          ', ',
        )}`,
      )
      return
    }
    setFileList(fileList)
  }
  const handleCancel = () => {
    setPreviewVisible(false)
  }
  const handlePreview = async (file) => {
    setPreviewVisible(true)
    setPreviewImage(file.url)
    setPreviewTitle(file.name)
  }
  React.useEffect(() => {
    setFileList(imageList)
  }, [imageList])

  return (
    <>
      <Form.Item
        name="avatarList"
        style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'start',
        }}
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          customRequest={dummyrequest}
          maxCount={limit}
          onChange={handleChange}
          onPreview={handlePreview}
        >
          {fileList?.length >= limit ? null : uploadButton}
        </Upload>
      </Form.Item>
      <Modal
        open={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img src={previewImage} style={{ width: '100%' }} alt={previewTitle} />
      </Modal>
    </>
  )
}

export default ImageUpload
