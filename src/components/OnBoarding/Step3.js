import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react'
import styles from './Step3.style'
import common from './Common.style'
import ProcessButton from '../Buttons/ProcessButton'
import { StyleRoot } from 'radium'
import { fetchOnboardingSurveyList } from '../../services/onboarding.service'
import { list } from 'postcss'

const Step3 = (props) => {

	const [currentPage, setCurrentPage] = useState(1)
	const [data, setData] = useState([])
	const [surveyList, setSurveyList] = useState([])
	const listRef = useRef([]);

	useEffect(() => {
		// setData(fetchOnboardingSurveyList())
		// console.log(data)

		async function fetchData() {
      // 2. Use a template string to set the URL:
      const res = await fetchOnboardingSurveyList()
			console.log(res?.data)
      setData(res?.data)
    }

    fetchData();
		
	}, [setData])

	const handleSurveyPage = () => {
		const survey = listRef.current.getList();
		
		if (surveyList?.some(surveyObj => surveyObj.id === survey.id)) {
			setSurveyList(surveyList.filter(surveyObj => surveyObj !== survey.id))
		} else {
			surveyList.push(survey)
		}
		
		if (currentPage < data.length) {
			setCurrentPage(currentPage + 1)
		} else {
			// TODO: add submit to API
			console.log(surveyList)
		}
	}

	return (
		<div style={styles().containerForm}>
			<span style={common().formTitleFont}>Getting Started</span>
			{
				<OnboardingSurvey ref={listRef}
													key={currentPage}
													data={data?.[currentPage - 1]}
													currentPage={currentPage} />
			}
			<ProcessButton onClick={() => handleSurveyPage()} isNav={false} btnLabel="Select" style={common().containerButton} />
		</div>
	)
}

const OnboardingSurvey = forwardRef((props, ref) => {

	const [selectedList, setSelectedList] = useState([])

	const onboardingOptionCallback = (e) => {
		if (e.isSelected) {
			selectedList.push(e.id)
		} else {
			setSelectedList(selectedList.filter(option => option !== e.id))
		}
	}

	useImperativeHandle(ref, () => ({
    getList() {
      return({id: props.data?.id, selectedOptions: selectedList})
    }
  }));

	return (
		<div>
			<span style={styles().fontSubTitle}>{props.data?.title}</span>
			<StyleRoot style={styles().containerSurvey}>
				{props.data?.onboarding_option?.map((option) => {
					return (
						<OnboardingOption key={`${props.currentPage}+${option.id}`} data={option} isSelected={onboardingOptionCallback} />
					)
				})}
			</StyleRoot>
		</div>
	)
})

const OnboardingOption = (props) => {
	const [isSelected, setIsSelected] = useState(false)

	const handleSelect = () => {
		setIsSelected(!isSelected)
	}

	useEffect(() => {
		props.isSelected({id: props.data?.id, isSelected: isSelected})
	}, [isSelected])
	
	return (
		<StyleRoot>
			<div onClick={handleSelect} style={styles(isSelected).containerOption}>
				<span style={styles().fontText}>{props.data?.title}</span>
			</div>
		</StyleRoot>
	)
}

export default Step3;
