import Axios from 'axios'
import { validationData } from '../utils'

export const getDataInterview = async (params) => {
  try {
    let items
    const respUrl1 = await Axios({
      method: 'GET',
      url: `${params?.url_origin_1}`,
    })

    const respUrl2 = await Axios({
      method: 'GET',
      url: `${params?.url_origin_2}`,
    })
    if (respUrl1?.data.length > 0 && respUrl2?.data.length > 0) {
      items = respUrl1.data.map((item, key) => ({
        id: item.id,
        id2: respUrl2.data[key].id,
        validation_id: validationData(item.id, respUrl2.data[key].id),
        name: item.name,
        name2: respUrl2.data[key].name,
        validation_name: validationData(
          item.name,
          respUrl2.data[key].name,
        ),
        date: item.interview_date,
        date2: respUrl2.data[key].interview_date,
        validation_date: validationData(
          item.interview_date,
          respUrl2.data[key].interview_date,
        ),
        procuration_image: item.procuration_image,
        procuration_image2: respUrl2.data[key].procuration_image,
        validation_procuration_image: validationData(
          item.procuration_image,
          respUrl2.data[key].procuration_image,
        ),
        business_certificate_image: item.business_certificate_image,
        business_certificate_image2:
          respUrl2.data[key].business_certificate_image,
        validation_business_certificate_image: validationData(
          item.business_certificate_image,
          respUrl2.data[key].business_certificate_image,
        ),

        psoe_name: item.psoe_name,
        psoe_name2: respUrl2.data[key].psoe_name,
        validation_psoe_name: validationData(
          item.psoe_name,
          respUrl2.data[key].psoe_name,
        ),
        form_number: item.form_number,
        form_number2: respUrl2.data[key].form_number,
        validation_form_number: validationData(
          item.form_number,
          respUrl2.data[key].form_number,
        ),
        source_data: item.source_data,
        source_data2: respUrl2.data[key].source_data,
        validation_source_data: validationData(
          item.source_data,
          respUrl2.data[key].source_data,
        ),
        created_at: item.interview_created_at,
        created_at2: respUrl2.data[key].interview_created_at,
        validation_created_at: validationData(
          item.created_at,
          respUrl2.data[key].created_at,
        ),
      }))
    }
    return items
  } catch (error) {
    throw error
  }
}
