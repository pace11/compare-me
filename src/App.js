/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import {
  BsLightningChargeFill,
  BsFillCheckCircleFill,
  BsFillXCircleFill,
} from 'react-icons/bs'
import { useQuery } from './utils'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'
import DataTable from 'react-data-table-component'
import { getDataInterview } from './api'

function App() {
  const query = useQuery()
  const [params, setParams] = useState({
    url_origin_1: '',
    url_origin_2: '',
  })

  const [dataInterview, setDataInterview] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const columns = [
    {
      name: 'Lead ID',
      selector: (row) => row.id,
    },
    {
      name: 'Data From',
      selector: () => (
        <>
          <p>URL 1 = {params.url_origin_1}</p>
          <p>URL 2 = {params.url_origin_2}</p>
        </>
      ),
    },
    {
      name: 'Name',
      selector: (row) => (
        <>
          <p>
            {row.name}{' '}
            {row.validation_name ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
          <p>
            {row.name2}{' '}
            {row.validation_name ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
        </>
      ),
    },
    {
      name: 'Date',
      selector: (row) => (
        <>
          <p>
            {row.date}{' '}
            {row.validation_date ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
          <p>
            {row.date2}{' '}
            {row.validation_date ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
        </>
      ),
    },
    {
      name: 'Procuration Image',
      selector: (row) => (
        <>
          <p>
            {row.procuration_image}{' '}
            {row.validation_procuration_image ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
          <p>
            {row.procuration_image2}{' '}
            {row.validation_procuration_image ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
        </>
      ),
    },
    {
      name: 'Business Certificate Image',
      selector: (row) => (
        <>
          <p>
            {row.business_certificate_image}{' '}
            {row.validation_business_certificate_image ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
          <p>
            {row.business_certificate_image2}{' '}
            {row.validation_business_certificate_image ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
        </>
      ),
    },
    {
      name: 'Psoe Name',
      selector: (row) => (
        <>
          <p>
            {row.psoe_name}{' '}
            {row.validation_psoe_name ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
          <p>
            {row.psoe_name2}{' '}
            {row.validation_psoe_name ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
        </>
      ),
    },
    {
      name: 'Form Number',
      selector: (row) => (
        <>
          <p>
            {row.form_number}{' '}
            {row.validation_form_number ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
          <p>
            {row.form_number2}{' '}
            {row.validation_form_number ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
        </>
      ),
    },
    {
      name: 'Source Data',
      selector: (row) => (
        <>
          <p>
            {row.source_data}{' '}
            {row.validation_source_data ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
          <p>
            {row.source_data2}{' '}
            {row.validation_source_data ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
        </>
      ),
    },
    {
      name: 'Created At',
      selector: (row) => (
        <>
          <p>
            {row.created_at}{' '}
            {row.validation_created_at ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
          <p>
            {row.created_at2}{' '}
            {row.validation_created_at ? (
              <BsFillCheckCircleFill color="#63BA76" />
            ) : (
              <BsFillXCircleFill color="#db284e" />
            )}
          </p>
        </>
      ),
    },
  ]

  useEffect(() => {
    if (query.get('url_origin_1') && query.get('url_origin_2')) {
      setIsLoading(true)
      setParams({
        url_origin_1: query.get('url_origin_1'),
        url_origin_2: query.get('url_origin_2'),
      })
      getDataInterview({
        url_origin_1: query.get('url_origin_1'),
        url_origin_2: query.get('url_origin_2'),
      }).then((res) => {
        setDataInterview(res)
        setIsLoading(false)
      })
    }
  }, [query])

  return (
    <Container>
      <Row>
        <h3 style={{ textAlign: 'center' }}>
          Compare Me <BsLightningChargeFill />
        </h3>
      </Row>
      <Row>
        <Col lg={12} md={12}>
          <Form>
            <FormGroup>
              <Label for="exToken">URL Origin 1</Label>
              <Input
                id="urlOrigin1"
                name="url_origin_1"
                type="text"
                placeholder="isikan url origin 1 ..."
                value={params?.url_origin_1}
                onChange={(e) => {
                  setParams({
                    ...params,
                    url_origin_1: e.target.value,
                  })
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exToken">URL Origin 2</Label>
              <Input
                id="urlOrigin2"
                name="url_origin_2"
                type="text"
                placeholder="isikan url origin 2 ..."
                value={params?.url_origin_2}
                onChange={(e) => {
                  setParams({
                    ...params,
                    url_origin_2: e.target.value,
                  })
                }}
              />
            </FormGroup>
            <FormGroup>
              <Button
                color="primary"
                disabled={
                  !params.url_origin_1 ||
                  !params.url_origin_2 ||
                  isLoading
                }
              >
                {!isLoading ? (
                  'Proses'
                ) : (
                  <ReactLoading
                    type="spin"
                    color="#fff"
                    height={25}
                    width={25}
                  />
                )}
              </Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12">
          <DataTable
            columns={columns}
            data={dataInterview || undefined}
            progressPending={isLoading}
            progressComponent={
              <ReactLoading
                type="bars"
                color="#212529"
                width={80}
                height={80}
              />
            }
            pagination
          />
        </Col>
      </Row>
      <style>
        {`
          .rdt_TableCell div:first-child {
            white-space: normal;
          }
        `}
      </style>
    </Container>
  )
}

export default App
