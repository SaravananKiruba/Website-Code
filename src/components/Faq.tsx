import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

interface FaqProps {
  id: string;
}

const Faq: React.FC<FaqProps> = ({ id }) => {
  const faqItems = [
    {
      category: 'Life Insurance',
      questions: [
        {
          question: 'What types of life insurance plans does LIC offer?',
          answer: 'LIC offers various types of life insurance plans including Term Insurance, Endowment Plans, Money Back Policies, ULIPs, Pension Plans, Child Plans, and more. Each plan is designed to cater to different financial needs and goals.'
        },
        {
          question: 'What tax benefits can I get from LIC policies?',
          answer: 'LIC policies offer tax benefits under Section 80C of the Income Tax Act. Premium paid up to ₹1.5 lakhs per annum is eligible for tax deduction. Additionally, the maturity amount received is tax-free under Section 10(10D), subject to certain conditions.'
        }
      ]
    },
    {
      category: 'Health Insurance',
      questions: [
        {
          question: 'What is covered under Star Health Insurance?',
          answer: 'Star Health Insurance typically covers hospitalization expenses, pre and post hospitalization costs, and more. Specific coverage varies by plan, but most plans include coverage for room rent, doctor fees, diagnostic tests, and medicines.'
        },
        {
          question: 'Is there a waiting period for pre-existing diseases?',
          answer: 'Yes, Star Health Insurance has a waiting period for pre-existing diseases, typically ranging from 2 to 4 years depending on the specific plan and condition. After this waiting period, your pre-existing conditions will be covered as per policy terms.'
        }
      ]
    },
    {
      category: 'Car & Bike Insurance',
      questions: [
        {
          question: 'What\'s the difference between comprehensive and third-party car insurance?',
          answer: 'Third-party insurance only covers damages to a third party\'s vehicle or property and is legally mandatory. Comprehensive insurance covers third-party damages as well as damages to your own vehicle due to accidents, theft, natural disasters, etc. It provides more extensive protection but comes at a higher premium.'
        },
        {
          question: 'How is the IDV calculated for bike insurance?',
          answer: 'Insured Declared Value (IDV) for bike insurance is calculated based on the manufacturer\'s listed selling price minus depreciation. The depreciation rate varies from 5% to 50% based on the age of the vehicle. IDV represents the maximum amount payable in case of total loss or theft.'
        }
      ]
    },
    {
      category: 'Travel & Building Insurance',
      questions: [        {
          question: 'Why is international travel insurance essential for overseas trips?',
          answer: 'International travel insurance is highly recommended for overseas trips as it provides crucial coverage for medical emergencies, which can be extremely expensive in foreign countries. It also covers trip cancellations, lost passports, baggage delays, flight cancellations, and even emergency evacuations. Many countries and visa applications now require proof of travel insurance with adequate medical coverage before entry is granted.'
        },
        {
          question: 'What perils are covered under building insurance?',
          answer: 'Building insurance typically covers damages due to fire, lightning, explosion, storms, floods, earthquakes, vandalism, and theft. It also covers damages to fixtures and fittings, as well as liability if someone is injured on your property. The exact coverage varies by policy.'
        }
      ]
    }
  ];

  return (
    <Box id={id} as="section" py={16} bg="gray.50">
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={12}>
          <Heading
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontWeight={'bold'}
            color={'brand.900'}
          >
            Frequently Asked Questions
          </Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Get answers to common questions about our insurance services
          </Text>
        </Stack>

        <Box maxW={'4xl'} mx={'auto'} mt={10} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} boxShadow={'lg'} p={{ base: 4, sm: 6, md: 8 }}>
          <Accordion allowMultiple>
            {faqItems.map((category, categoryIndex) => (
              <Box key={categoryIndex} mb={6}>
                <Heading size="md" mb={3} color="brand.800">
                  {category.category}
                </Heading>
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    border="1px solid" 
                    borderColor="gray.200" 
                    mb={3} 
                    rounded="md"
                  >
                    <h2>
                      <AccordionButton 
                        p={4} 
                        _expanded={{ bg: 'brand.50', color: 'brand.900' }}
                      >
                        <Box flex="1" textAlign="left" fontWeight="semibold">
                          {faq.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} px={4}>
                      {faq.answer}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Box>
            ))}
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default Faq;