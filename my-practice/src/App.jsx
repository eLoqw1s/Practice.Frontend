import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import './App.css'
import { useEffect, useState } from 'react'
import {
  fetchFirst,
  fetchSecond,
  fetchThird,
  fetchFourth,
  fetchFifth,
  fetchSixth,
  fetchSeventh,
  fetchEighth,
  fetchNinth,
  fetchTenth,
} from './services/practice'
import moment from "moment/moment";

function App() {

  const [first, setFirst] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchFirst();
      setFirst(data);
    }
    fetchData();
  }, [])

  const [second, setSecond] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchSecond();
      setSecond(data);
      console.log(data);
    }
    fetchData();
  }, [])

  const [third, setThird] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchThird();
      setThird(data);
    }
    fetchData();
  }, [])

  const [fourth, setFourth] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchFourth();
      setFourth(data);
    }
    fetchData();
  }, [])

  const [fifth, setFifth] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchFifth();
      setFifth(data);
    }
    fetchData();
  }, [])

  const [sixth, setSixth] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchSixth();
      setSixth(data);
    }
    fetchData();
  }, [])

  const [seventh, setSeventh] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchSeventh();
      setSeventh(data);
    }
    fetchData();
  }, [])

  const [eighth, setEighth] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchEighth();
      setEighth(data);
    }
    fetchData();
  }, [])

  const [ninth, setNinth] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchNinth();
      setNinth(data);
    }
    fetchData();
  }, [])

  const [tenth, setTenth] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetchTenth();
      setTenth(data);
    }
    fetchData();
  }, [])


  return <section className='p-8 flex flex-row justify-center items-center'>
    <div className='flex flex-col w-1/2 gap-5'>
      <Accordion>
        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              <h1 className="font-medium text-fuchsia-900">1. Отобразить реквизиты сотрудников, менеджеры которых устроились на работу в 2023 г., но при это сами эти работники устроились на работу до 2023 г.</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul className="list-disc space-y-4">
              {first.map((employee, index) => (
                <li key={index}>
                  <div><strong>First name:</strong> {employee.firstName}</div>
                  <div><strong>Second name:</strong> {employee.secondName}</div>
                  <div><strong>Email:</strong> {employee.email}</div>
                  <div><strong>Phone number:</strong> {employee.phoneNumber}</div>
                  <div><strong>Hire date:</strong> {moment(employee.hireDane).format("DD/MM/YYYY h:mm:ss")}</div>
                  <div><strong>Salary:</strong> {employee.salary}</div>
                  <div><strong>Commission pct:</strong> {employee.commissionPct}</div>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              <h1 className="font-medium text-fuchsia-900">2. Отобразить данные по сотрудникам: из какого департамента и какими текущими задачами они занимаются.</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul className="list-disc space-y-4">
              {second.map((employee, index) => (
                <li key={index}>
                  <div><strong>First name:</strong> {employee.firstName}</div>
                  <div><strong>Job title:</strong> {employee.jobTitle}</div>
                  <div><strong>Department name:</strong> {employee.departmentName}</div>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              <h1 className="font-medium text-fuchsia-900">3. Отобразить город, в котором сотрудники в сумме зарабатывают меньше всех.</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul className="list-disc space-y-4">
              <div><strong>City with lowest salary: </strong> {third}</div>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              <h1 className="font-medium text-fuchsia-900">4. Вывести все реквизиты сотрудников менеджеры которых устроились на работу в январе месяце любого года и длина job_title этих сотрудников больше 15ти символовг.</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul className="list-disc space-y-4">
              {fourth.map((employee, index) => (
                <li key={index}>
                  <div><strong>First name:</strong> {employee.firstName}</div>
                  <div><strong>Second name:</strong> {employee.secondName}</div>
                  <div><strong>Email:</strong> {employee.email}</div>
                  <div><strong>Phone number:</strong> {employee.phoneNumber}</div>
                  <div><strong>Hire date:</strong> {moment(employee.hireDane).format("DD/MM/YYYY h:mm:ss")}</div>
                  <div><strong>Salary:</strong> {employee.salary}</div>
                  <div><strong>Commission pct:</strong> {employee.commissionPct}</div>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              <h1 className="font-medium text-fuchsia-900">5. Вывести реквизит first_name сотрудников, которые живут в Europe.</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul className="list-disc">
              <strong>Names of employees in Europe:</strong>
              {fifth.map((employee, index) => (
                <li key={index}>
                  {employee}
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              <h1 className="font-medium text-fuchsia-900">6. Получить детальную информацию о каждом сотруднике.</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul className="list-disc space-y-4">
              {sixth.map((employee, index) => (
                <li key={index}>
                  <div><strong>First name:</strong> {employee.firstName}</div>
                  <div><strong>Second name:</strong> {employee.lastName}</div>
                  <div><strong>Department:</strong> {employee.department}</div>
                  <div><strong>Job:</strong> {employee.job}</div>
                  <div><strong>Street:</strong> {employee.street}</div>
                  <div><strong>Country:</strong> {employee.country}</div>
                  <div><strong>Region:</strong> {employee.region}</div>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              <h1 className="font-medium text-fuchsia-900">7. Отразить регионы и количество сотрудников в каждом из них.</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul className="list-disc space-y-4">
              {seventh.map((region, index) => (
                <li key={index}>
                  <div><strong>Region name:</strong> {region.regionName}</div>
                  <div><strong>Employee count:</strong> {region.employeeCount}</div>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              <h1 className="font-medium text-fuchsia-900">8. Вывести информацию по департаменту department_name с минимальной и максимальной зарплатой, с ранней и поздней датой прихода на работу и с количеством сотрудников. Сортировать по количеству сотрудников (по убыванию).</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul className="list-disc space-y-4">
              {eighth.map((stats, index) => (
                <li key={index}>
                  <div><strong>Department name:</strong> {stats.departmentName}</div>
                  <div><strong>Min salary:</strong> {stats.minSalary}</div>
                  <div><strong>Max salary:</strong> {stats.maxSalary}</div>
                  <div><strong>Earliest hire date:</strong> {stats.earliestHireDate}</div>
                  <div><strong>Latest hire date:</strong> {stats.latestHireDate}</div>
                  <div><strong>Employee count:</strong> {stats.employeeCount}</div>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              <h1 className="font-medium text-fuchsia-900">9. Получить список реквизитов сотрудников FIRST_NAME, LAST_NAME и первые три цифры от номера телефона, если номер в формате ХХХ.ХХХ.ХХХХ.</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul className="list-disc space-y-4">
              {ninth.map((employee, index) => (
                <li key={index}>
                  <div><strong>First name:</strong> {employee.firstName}</div>
                  <div><strong>Second name:</strong> {employee.lastName}</div>
                  <div><strong>Part phone number:</strong> {employee.phoneFormat}</div>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              <h1 className="font-medium text-fuchsia-900">10. Вывести список сотрудников, которые работают в департаменте администрирования доходов (departments.department_name = 'DAD').</h1>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <ul className="list-disc space-y-4">
              {tenth.map((employee, index) => (
                <li key={index}>
                  <div><strong>First name:</strong> {employee.firstName}</div>
                  <div><strong>Second name:</strong> {employee.secondName}</div>
                  <div><strong>Email:</strong> {employee.email}</div>
                  <div><strong>Phone number:</strong> {employee.phoneNumber}</div>
                  <div><strong>Hire date:</strong> {moment(employee.hireDane).format("DD/MM/YYYY h:mm:ss")}</div>
                  <div><strong>Salary:</strong> {employee.salary}</div>
                  <div><strong>Commission pct:</strong> {employee.commissionPct}</div>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
}

export default App
