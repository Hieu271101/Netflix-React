import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Skeleton,
} from 'antd'
import React from 'react'
// import ImageUpload from '../../../components/upload'
// import { validateMessages } from '../../../ultils/FormMessage'
import PropTypes from 'prop-types'
import {
  MovieCountry,
  MoviLanguages,
  MovieLimitAge,
  defaultStatus,
} from '../../../utils/data'
import ImageUpload from '../../upload/ImageUpload'
MovieForm.propTypes = {
  form: PropTypes.any,
  onFinish: PropTypes.any,
  image: PropTypes.any,
  setImage: PropTypes.any,
  onReset: PropTypes.any,
}

function MovieForm({ form, onFinish, image, setImage, onReset }) {
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        // validateMessages={validateMessages}
      >
        <div className="grid grid-flow-col overflow-scroll">
          {/* {image ? (
            <>
              <Card className="col-6 w-full">
                <Form.Item label="Ảnh">
                  <ImageUpload imageList={image} limit={1} key={1} />
                </Form.Item>
                <Form.Item
                  name="name"
                  label="Tên phim"
                  rules={[{ required: true, min: 5 }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="runTime"
                  label="Thời gian chiếu (dv: phút)"
                  rules={[
                    { required: true },
                    { type: 'number', min: 45, max: 180 },
                  ]}
                >
                  <InputNumber min={45} max={180} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                  label="Thể loại"
                  name="movieTypeId"
                  rules={[{ required: true }]}
                >
                  <Select mode="multiple">
                    {movieType &&
                      movieType?.map((item, index) => (
                        <Select.Option value={item._id} key={index}>
                          {item?.movieName}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="ageLimit"
                  label="Độ tuổi giới hạn"
                  rules={[{ required: true }]}
                  className="w-full overflow-hidden"
                >
                  <Select>
                    {MovieLimitAge?.map((item, index) => (
                      <Select.Option value={item?.name} key={index}>
                        {item.name} - {item?.desc}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="languages"
                  label="Loại hình chiếu"
                  rules={[{ required: true }]}
                >
                  <Select>
                    {MoviLanguages?.map((item, index) => (
                      <Select.Option value={item?.name} key={index}>
                        {item.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Card>
              <Card className="col-6 w-full mt-3">
                <Form.Item
                  name="releaseDate"
                  label="Ngày ra mắt"
                  rules={[{ required: true }]}
                >
                  <DatePicker format="DD-MM-YYYY" />
                </Form.Item>
                <Form.Item
                  name="country"
                  label="Quốc gia"
                  rules={[{ required: true }]}
                >
                  <Select>
                    {MovieCountry?.map((item, index) => (
                      <Select.Option value={item?.name} key={index}>
                        {item.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="Trạng thái" name="status">
                  <Select>
                    {defaultStatus.map((item) => (
                      <Select.Option key={item.value} value={item.value}>
                        {item.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="actor"
                  label="Diễn viên"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="director"
                  label="Đạo diễn"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item name="trailerUrl" label="Trailer">
                  <Input />
                </Form.Item>

                <Form.Item
                  name="description"
                  label="Mô tả"
                  rules={[{ required: true }]}
                >
                  <Input.TextArea />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Lưu
                  </Button>

                  <Button htmlType="button" onClick={onReset} className="ml-3">
                    Nhập lại
                  </Button>
                </Form.Item>
              </Card>
            </>
          ) 
          : (
            <>
              <Skeleton />
            </>
          )} */}
          <Card className="col-6 w-full">
            <Form.Item
              name="title"
              label="Tên phim"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="duration"
              label="Thời gian chiếu (dv: phút)"
              rules={[
                { required: true },
                { type: 'number', min: 45, max: 180 },
              ]}
            >
              <InputNumber min={45} max={180} style={{ width: '100%' }} />
            </Form.Item>

            {/* <Form.Item
              label="Thể loại"
              name="movieTypeId"
              rules={[{ required: true }]}
            >
              <Select mode="multiple">
                {movieType &&
                  movieType.map((item, index) => (
                    <Select.Option value={item._id} key={index}>
                      {item.movieName}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item> */}
            <Form.Item
              name="thumbnailUrl"
              label="Thumnail Url"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="videoUrl"
              label="Video Url"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Mô tả"
              rules={[{ required: true }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item>
              <Button className="bg-blue-500" type="primary" htmlType="submit">
                Lưu
              </Button>

              <Button htmlType="button" onClick={onReset} className="ml-3">
                Nhập lại
              </Button>
            </Form.Item>
          </Card>
        </div>
      </Form>
    </>
  )
}

export default MovieForm
