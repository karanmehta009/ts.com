// d:\Traviora\Traviora-demo2-webpage\js\medical-db.js

const TravioraMedicalDb = {
    treatments: {
        "cardiology": {
            slug: "cardiology",
            title: "Cardiology & Cardiac Surgery",
            category: "Heart Care",
            heroTitle: "Cardiology Treatment in India",
            heroSub: "Access world-renowned cardiac centers, top cardiothoracic surgeons, and state-of-the-art diagnostic and surgical technologies in India.",
            heroImg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
            overview: "India is a globally recognized destination for advanced cardiology and cardiac surgeries, offering high success rates, JCI & NABH-accredited facilities, and experienced cardiovascular surgeons.",
            aboutText: "Cardiology treatments encompass a wide range of procedures from minimally invasive catheter-based interventions to complex open-heart surgeries. Leading Indian hospitals feature hybrid operating rooms, 3D cardiac mapping systems, and dedicated cardiac ICUs to ensure comprehensive care before, during, and after surgical procedures.",
            duration: "7 - 14 Days",
            subcategories: [
                "Coronary Artery Bypass Grafting (CABG)",
                "Angioplasty & Stenting",
                "Heart Valve Replacement / Repair",
                "Pediatric Cardiac Surgery",
                "Pacemaker / ICD Implantation",
                "Electrophysiology & Ablation"
            ],
            processSteps: [
                { num: "01", title: "Initial Information", desc: "Submit your symptoms, medical history, and recent test reports through Traviora." },
                { num: "02", title: "Medical Document Review", desc: "Our coordination team compiles your records for preliminary assessment by senior cardiologists." },
                { num: "03", title: "Hospital Coordination", desc: "We share reports with leading partner hospitals in Delhi, Mumbai, or Chennai to get clinical opinions." },
                { num: "04", title: "Treatment Planning", desc: "A tentative clinical pathway and estimated length of stay are organized for your review." },
                { num: "05", title: "Travel Coordination", desc: "Traviora assists with Medical Visa invitation letters, flight planning, and hospital transfers." },
                { num: "06", title: "Hospital Visit / Treatment", desc: "Arrival in India, in-person consultation, diagnostic validation, and treatment execution." }
            ],
            whyIndia: [
                { title: "Specialized Cardiac Hospitals", desc: "Dedicated heart centers equipped with latest catheterization labs, robotic surgery systems, and cardiac ICUs." },
                { title: "Experienced Cardiac Surgeons", desc: "Surgeons trained at premier international institutions with thousands of successful cardiac procedures performed." },
                { title: "Advanced Healthcare Infrastructure", desc: "Accredited facilities incorporating ECMO support, 3D echocardiography, and hybrid operating suites." },
                { title: "International Patient Services", desc: "Dedicated multi-lingual coordinators, private suites, and culturally tailored dietary options." },
                { title: "Multiple Treatment Options", desc: "Full spectrum of cardiac care ranging from preventive diagnostics to complex valve repair and bypass surgeries." },
                { title: "International Travel Connectivity", desc: "Direct flights connecting major global hubs to Indian metros like Delhi, Mumbai, Chennai, and Bengaluru." }
            ],
            hospitals: [
                { name: "Fortis Escorts Heart Institute", city: "Delhi", specialty: "Interventional Cardiology & CABG", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "Pioneer in cardiac care with over 200,000 coronary procedures performed by expert cardiologists." },
                { name: "Apollo Hospitals", city: "Chennai", specialty: "Robotic Heart Surgery & Pediatric Cardiac", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "Renowned globally for high success rates in valve replacement and pediatric heart repairs." },
                { name: "Narayana Health City", city: "Bengaluru", specialty: "Complex Bypass & Valve Repair", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80", rating: "4.8", desc: "One of the world's largest cardiac care centers delivering affordable, high-end heart surgeries." },
                { name: "Max Super Speciality Hospital", city: "Delhi", specialty: "Electrophysiology & Minimally Invasive Cardiac", img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80", rating: "4.8", desc: "State-of-the-art hybrid Cath Labs and advanced cardiac arrhythmia treatment facilities." }
            ],
            faqs: [
                { q: "What medical documents should I provide for Cardiology evaluation?", a: "Please upload your recent Electrocardiogram (ECG), Echocardiogram (Echo), Coronary Angiogram report/CD if available, recent blood work, and current prescription list." },
                { q: "How long will I need to stay in India for heart surgery?", a: "Typically, cardiac procedures require 5 to 7 days in the hospital followed by 7 to 10 days of outpatient recovery before your treating physician clears you for flight travel." },
                { q: "Can I choose a specific hospital or cardiologist?", a: "Yes. You can specify your preferred hospital or doctor during booking, or Traviora can provide comparative opinions from multiple top hospitals." },
                { q: "Can Traviora assist with Medical Visas for my family companion?", a: "Absolutly. Traviora coordinates with hospital international desks to issue official Medical Visa Invitation Letters for both the patient and up to two attendants." },
                { q: "Does Traviora provide airport transfers and hotel bookings?", a: "Yes. We arrange wheelchair-accessible airport pickup, nearby hotel or service apartment stays tailored for recovery, and local transportation." }
            ]
        },

        "oncology": {
            slug: "oncology",
            title: "Oncology & Cancer Care",
            category: "Cancer Care",
            heroTitle: "Comprehensive Cancer Care in India",
            heroSub: "Advanced multidisciplinary oncology including Proton Therapy, Immunotherapy, CyberKnife, and specialized surgical oncology.",
            heroImg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
            overview: "India hosts cutting-edge cancer institutes equipped with linear accelerators, Proton Beam Therapy, PET-CT imaging, and tumor boards comprising medical, surgical, and radiation oncologists.",
            aboutText: "Cancer treatment requires highly individualized planning. Indian oncology centers utilize multidisciplinary tumor boards where experts collectively analyze biopsy, genomic, and imaging data to formulate targeted chemo, radiation, or surgical pathways.",
            duration: "14 - 30 Days",
            subcategories: [
                "Surgical Oncology",
                "Radiation Oncology (IMRT / IGRT / Proton Therapy)",
                "Medical Oncology & Targeted Chemotherapy",
                "Immunotherapy & CAR-T Cell Therapy",
                "CyberKnife & Gamma Knife Radiosurgery",
                "Bone Marrow / Stem Cell Transplant"
            ],
            processSteps: [
                { num: "01", title: "Initial Information", desc: "Upload biopsy reports, PET-CT scans, and clinical notes." },
                { num: "02", title: "Medical Document Review", desc: "Tumor board review to evaluate diagnostic completeness." },
                { num: "03", title: "Hospital Coordination", desc: "Obtain opinion and proposed line of treatment from top cancer centers." },
                { num: "04", title: "Treatment Planning", desc: "Receive estimated timeline for chemo cycles, surgery, or radiation." },
                { num: "05", title: "Travel Coordination", desc: "Visa invitation, flights, and long-stay accommodation booking." },
                { num: "06", title: "Hospital Visit / Treatment", desc: "Biopsy confirmation, systemic therapy or surgical resection." }
            ],
            whyIndia: [
                { title: "Specialized Cancer Institutes", desc: "Comprehensive cancer centers housing modern PET-CT scanners, SPECT, and Next-Gen Sequencing labs." },
                { title: "Multidisciplinary Tumor Boards", desc: "Collaborative case evaluation by surgical, medical, and radiation specialists." },
                { title: "Advanced Radiation Technology", desc: "Proton Beam Therapy, TrueBeam STx, CyberKnife, and Brachytherapy facilities." },
                { title: "International Patient Support", desc: "Dedicated international wards, nutritionists, and long-stay service apartments." },
                { title: "Broad Range of Chemotherapy Options", desc: "Access to latest targeted biological therapies and modern immunotherapies." },
                { title: "Global Flight Connectivity", desc: "Direct air routes to major healthcare hubs like Delhi, Mumbai, Bengaluru, and Kolkata." }
            ],
            hospitals: [
                { name: "Tata Memorial Centre Partner Clinics", city: "Mumbai", specialty: "Surgical & Medical Oncology", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "Renowned leader in evidence-based cancer management in South Asia." },
                { name: "Apollo Proton Cancer Centre", city: "Chennai", specialty: "Proton Beam Therapy & Precision Oncology", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "South Asia's first dedicated Proton Beam Therapy facility." },
                { name: "Medanta - The Medicity", city: "Gurugram (Delhi NCR)", specialty: "Robotic Surgical Oncology & CyberKnife", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80", rating: "4.8", desc: "Integrated cancer institute providing organ-preserving surgeries and radiosurgery." }
            ],
            faqs: [
                { q: "Can my biopsy slides be re-examined in India?", a: "Yes. Indian hospitals routinely re-evaluate histopathology slides and paraffin blocks to confirm exact staging before initiating treatment." },
                { q: "How long does a typical oncology evaluation take upon arrival?", a: "Initial consultations and confirmatory diagnostic tests (PET-CT/labs) are generally completed within 48 to 72 hours of arrival." }
            ]
        },

        "orthopedics": {
            slug: "orthopedics",
            title: "Orthopedic Surgery & Joint Care",
            category: "Joint Care",
            heroTitle: "Orthopedic & Joint Surgery in India",
            heroSub: "Robotic joint replacement, spine stabilization, arthroscopy, and advanced physical rehabilitation.",
            heroImg: "https://images.unsplash.com/photo-1551076805-e18690c5e45e?auto=format&fit=crop&w=1200&q=80",
            overview: "Indian orthopedic centers are world leaders in robotic total knee and hip replacements, offering high-durability implants and accelerated recovery protocols.",
            aboutText: "Orthopedic care ranges from computer-assisted mini-incision joint replacements to complex spinal deformity corrections. Leading facilities provide integrated physiotherapeutic suites ensuring patients regain mobility safely before traveling home.",
            duration: "7 - 14 Days",
            subcategories: [
                "Robotic Knee Replacement",
                "Total & Partial Hip Replacement",
                "Spinal Fusion & Disc Replacement",
                "Arthroscopic ACL / Meniscus Repair",
                "Shoulder & Elbow Joint Replacement",
                "Pediatric Orthopedics & Deformity Correction"
            ],
            processSteps: [
                { num: "01", title: "Initial Information", desc: "Share recent X-rays, MRI scans, and mobility history." },
                { num: "02", title: "Medical Document Review", desc: "Senior joint replacement surgeons assess joint space and bone alignment." },
                { num: "03", title: "Hospital Coordination", desc: "Formulate surgery package options with hospital rehab schedules." },
                { num: "04", title: "Treatment Planning", desc: "Pre-op checkups, implant selection (US-FDA approved), and rehab timeline." },
                { num: "05", title: "Travel Coordination", desc: "Wheelchair assistance booking, accessible hotel rooms, and airport transfers." },
                { num: "06", title: "Hospital Visit / Surgery", desc: "Surgery execution followed by supervised inpatient physiotherapy." }
            ],
            whyIndia: [
                { title: "Robotic Surgery Facilities", desc: "Mako and NAVIO robotic surgical systems for pinpoint implant alignment." },
                { title: "High-Durability FDA Implants", desc: "Use of internationally certified ceramic and oxinium implants designed for long life." },
                { title: "Specialized Physical Rehab Units", desc: "Hydrotherapy, gait training, and daily physiotherapist sessions built into care." },
                { title: "Experienced Joint Specialists", desc: "Surgeons performing over 500 joint replacements annually with low infection rates." },
                { title: "Comprehensive Post-Op Care", desc: "Monitored pain management and customized recovery exercises." },
                { title: "Accessible Metro Connectivity", desc: "Major hospital clusters located near international airports in Delhi, Mumbai, Bengaluru, and Hyderabad." }
            ],
            hospitals: [
                { name: "Max Institute of Musculoskeletal Sciences", city: "Delhi", specialty: "Robotic Knee & Hip Replacement", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "Over 15,000 successful joint replacements using computer navigation." },
                { name: "Apollo Hospitals", city: "Hyderabad", specialty: "Spine Surgery & Sports Medicine", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80", rating: "4.8", desc: "Specialized arthroscopy and minimal access spine surgery center." }
            ],
            faqs: [
                { q: "When can I walk after robotic knee replacement?", a: "Most patients stand and take assisted steps within 24 hours of robotic knee replacement surgery under guidance of physical therapists." },
                { q: "Are the implants used in India FDA approved?", a: "Yes. Hospitals in India use top global brands like Stryker, Zimmer Biomet, and DePuy Synthes." }
            ]
        },

        "neurosurgery": {
            slug: "neurosurgery",
            title: "Neurosurgery & Spine Care",
            category: "Neurology",
            heroTitle: "Advanced Neurosurgery in India",
            heroSub: "Brain tumor resections, micro-neurosurgery, deep brain stimulation (DBS), and minimally invasive spine surgeries.",
            heroImg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
            overview: "India's neurosurgery departments feature intraoperative MRI suites, neuro-navigation systems, and gamma knife units for complex neurological conditions.",
            aboutText: "Neurosurgical care requires meticulous precision. Experienced neurosurgeons perform micro-dissections, endoscopic skull base procedures, and spine stabilization supported by 24/7 dedicated Neuro-ICUs.",
            duration: "10 - 21 Days",
            subcategories: ["Brain Tumor Surgery", "Minimally Invasive Spine Surgery", "Deep Brain Stimulation (DBS)", "Aneurysm Clipping / Coiling", "Pediatric Neurosurgery"],
            processSteps: [
                { num: "01", title: "Initial Information", desc: "Provide brain/spine MRI and neurological exam summary." },
                { num: "02", title: "Medical Document Review", desc: "Neuro-radiologist and neurosurgeon opinion." },
                { num: "03", title: "Hospital Coordination", desc: "Review options from leading neuro institutes." },
                { num: "04", title: "Treatment Planning", desc: "Surgical approach determination and ICU stay estimates." },
                { num: "05", title: "Travel Coordination", desc: "Stretcher/wheelchair flight arrangements and visas." },
                { num: "06", title: "Hospital Visit / Surgery", desc: "Micro-surgery and neuro-rehabilitation." }
            ],
            whyIndia: [
                { title: "Intraoperative MRI & Navigation", desc: "Real-time brain imaging during surgery for maximal tumor removal." },
                { title: "Experienced Neurosurgeons", desc: "Pioneers in endoscopic skull base and complex vascular neurosurgery." },
                { title: "Specialized Neuro ICUs", desc: "Dedicated critical care units managed by neuro-anesthetists." },
                { title: "Advanced Radiosurgery", desc: "Gamma Knife and CyberKnife options for non-invasive treatment." },
                { title: "Integrated Neuro Rehab", desc: "Occupational therapy and neuro-physiotherapy programs." },
                { title: "Global Flight Access", desc: "Convenient flights to Delhi, Mumbai, Chennai, and Bengaluru." }
            ],
            hospitals: [
                { name: "Medanta Institute of Neurosciences", city: "Gurugram (Delhi NCR)", specialty: "Brain & Spine Surgery", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "Equipped with BrainSuite intraoperative MRI." },
                { name: "Fortis Memorial Research Institute", city: "Gurugram", specialty: "DBS & Micro-Neurosurgery", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80", rating: "4.8", desc: "Advanced center for Parkinson's DBS and complex brain lesions." }
            ],
            faqs: [
                { q: "Is Deep Brain Stimulation available?", a: "Yes, leading neurosurgery centers perform DBS for Parkinson's disease and dystonia." }
            ]
        },

        "fertility": {
            slug: "fertility",
            title: "IVF & Reproductive Medicine",
            category: "Fertility",
            heroTitle: "IVF & Fertility Treatment in India",
            heroSub: "High-success rate IVF, ICSI, IUI, and advanced reproductive technology in state-of-the-art embryology labs.",
            heroImg: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
            overview: "India is a globally preferred hub for fertility treatments, offering high success rates, advanced embryology labs, and compassionate reproductive specialists.",
            aboutText: "Reproductive medicine protocols are customized based on comprehensive hormone profiling, ultrasound monitoring, and genetic screening. Advanced IVF labs utilize time-lapse embryo imaging and PGT-A testing.",
            duration: "14 - 21 Days",
            subcategories: ["In Vitro Fertilization (IVF)", "Intracytoplasmic Sperm Injection (ICSI)", "Preimplantation Genetic Testing (PGT)", "Fertility Preservation / Egg Freezing", "Male Infertility Treatment"],
            processSteps: [
                { num: "01", title: "Initial Information", desc: "Submit hormone test levels and previous IVF history." },
                { num: "02", title: "Medical Document Review", desc: "Senior fertility specialist evaluates reproductive history." },
                { num: "03", title: "Hospital Coordination", desc: "Protocol plan formulated (short or long stimulation cycle)." },
                { num: "04", title: "Treatment Planning", desc: "Medication schedule synchronized with travel dates." },
                { num: "05", title: "Travel Coordination", desc: "Accommodation near fertility clinic arranged." },
                { num: "06", title: "Clinic Visit / Treatment", desc: "Ovarian stimulation, egg retrieval, fertilization, and transfer." }
            ],
            whyIndia: [
                { title: "Advanced Embryology Labs", desc: "Cleanroom Class 100 labs with time-lapse incubators." },
                { title: "Experienced Fertility Specialists", desc: "Reproductive endocrinologists with high clinical pregnancy rates." },
                { title: "Genetic Screening (PGT-A/M)", desc: "Embryo chromosomal evaluation prior to transfer." },
                { title: "Personalized Support", desc: "Sensitive, patient-centered care and confidential counseling." },
                { title: "Comprehensive Male & Female Care", desc: "Integrated urology and gynecology expertise." },
                { title: "Convenient Urban Locations", desc: "Clinics in Delhi, Mumbai, Bengaluru, Hyderabad, and Chennai." }
            ],
            hospitals: [
                { name: "Nova IVF Fertility", city: "Mumbai", specialty: "IVF & ICSI", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "Over 75,000 IVF pregnancies achieved across India." },
                { name: "Apollo Fertility", city: "Bengaluru", specialty: "Advanced Embryology & PGT", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80", rating: "4.8", desc: "Cutting-edge reproductive genetics and fertility preservation." }
            ],
            faqs: [
                { q: "How long does an IVF cycle require me to stay in India?", a: "A fresh IVF cycle typically requires 18 to 21 days from stimulation start to embryo transfer." }
            ]
        },

        "transplant": {
            slug: "transplant",
            title: "Organ Transplant Coordination",
            category: "Transplant",
            heroTitle: "Organ Transplant Care in India",
            heroSub: "Comprehensive coordination for living-donor Kidney and Liver transplants at top accredited transplant centers.",
            heroImg: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
            overview: "India is home to world-renowned liver and kidney transplant programs adhering strictly to international clinical standards and legal regulations.",
            aboutText: "Organ transplantation involves meticulous medical evaluation of recipient and living related donor, legal authorization committee clearance, specialized surgical execution, and immunosuppressive management.",
            duration: "30 - 45 Days",
            subcategories: ["Living Donor Kidney Transplant", "Living Donor Liver Transplant", "Pediatric Liver / Kidney Transplant", "Post-Transplant Follow-up Care"],
            processSteps: [
                { num: "01", title: "Initial Information", desc: "Submit donor and recipient clinical summary and relationship documents." },
                { num: "02", title: "Medical Document Review", desc: "Transplant team verifies medical feasibility and HLA matching data." },
                { num: "03", title: "Hospital Coordination", desc: "Hospital legal & clinical team reviews pre-transplant workup." },
                { num: "04", title: "Treatment Planning", desc: "Authorization committee paperwork guidance and pre-op clearance." },
                { num: "05", title: "Travel Coordination", desc: "Medical Visas for donor & recipient, specialized post-transplant apartment." },
                { num: "06", title: "Hospital Visit / Transplant", desc: "Transplant surgery, ICU stay, and post-discharge monitoring." }
            ],
            whyIndia: [
                { title: "High-Volume Transplant Centers", desc: "Hospitals performing hundreds of living-donor liver & kidney transplants annually." },
                { title: "Dedicated Isolation ICUs", desc: "HEPA-filtered sterile rooms to minimize post-op infection risk." },
                { title: "Experienced Transplant Surgeons", desc: "Surgeons with international fellowships and benchmark survival outcomes." },
                { title: "Transparent Legal Compliance", desc: "Clear legal protocols in compliance with human organ transplantation laws." },
                { title: "Long-Term Rehabilitation", desc: "On-site nephrology/hepatology monitoring and therapeutic drug monitoring." },
                { title: "Metro Accessibility", desc: "Top transplant units located in Delhi NCR, Chennai, Mumbai, and Kochi." }
            ],
            hospitals: [
                { name: "Max Centre for Liver & Biliary Sciences", city: "Delhi NCR", specialty: "Living Donor Liver Transplant", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "Over 3,000 liver transplants performed with high success rates." },
                { name: "Apollo Hospitals Transplant Institute", city: "Chennai", specialty: "Renal & Hepatic Transplants", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "Comprehensive solid organ transplant center." }
            ],
            faqs: [
                { q: "Can a family member donate a kidney or liver segment?", a: "Yes. Under Indian law, living donation is permitted from legally verified first-degree relatives subject to Authorization Committee approval." }
            ]
        },

        "ophthalmology": {
            slug: "ophthalmology",
            title: "Ophthalmology & Lasik Vision",
            category: "Vision",
            heroTitle: "Advanced Eye Care & Lasik in India",
            heroSub: "Contoura Vision Lasik, Femto-Laser Cataract Surgery, Corneal Transplants, and Vitreoretinal Surgery.",
            heroImg: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
            overview: "India is famous for state-of-the-art eye care institutes providing rapid blade-less vision correction and complex retinal surgeries.",
            aboutText: "Eye care procedures utilize ultra-precise Femtosecond lasers, topography-guided Contoura platforms, and advanced intraocular lens (IOL) implants for rapid visual recovery.",
            duration: "3 - 7 Days",
            subcategories: ["Contoura Vision / SMILE Lasik", "Robotic Laser Cataract Surgery (FLACS)", "Vitreoretinal Surgery", "Corneal Transplant", "Glaucoma & Pediatric Ophthalmology"],
            processSteps: [
                { num: "01", title: "Initial Information", desc: "Provide current prescription and corneal topography if available." },
                { num: "02", title: "Medical Document Review", desc: "Ophthalmologist checks eligibility for laser vision correction." },
                { num: "03", title: "Hospital Coordination", desc: "Confirm appointment with specialized eye institute." },
                { num: "04", title: "Treatment Planning", desc: "Pre-procedure corneal mapping and lens selection." },
                { num: "05", title: "Travel Coordination", desc: "Short stay hotel booking and airport pickup." },
                { num: "06", title: "Clinic Visit / Surgery", desc: "Blade-less procedure (15 mins) and next-day follow-up." }
            ],
            whyIndia: [
                { title: "Blade-less Laser Technology", desc: "Contoura Vision, SMILE, and Wavefront-guided systems." },
                { title: "World-Renowned Eye Institutes", desc: "Specialized tertiary eye hospitals treating international patients daily." },
                { title: "Premium Intraocular Lenses", desc: "Multifocal, Toric, and Extended Depth of Focus (EDOF) IOL implants." },
                { title: "Fast Recovery Protocols", desc: "Outpatient procedures with minimal downtime." },
                { title: "Affordable Eye Care", desc: "High precision at a fraction of Western costs." },
                { title: "Metro Flight Connections", desc: "Clinics situated in major hubs: Chennai, Delhi, Mumbai, Bengaluru." }
            ],
            hospitals: [
                { name: "Dr. Agarwal's Eye Hospital", city: "Chennai", specialty: "Laser Cataract & Lasik", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "Global leader in micro-incisional cataract surgery and corneal care." },
                { name: "Centre for Sight", city: "Delhi NCR", specialty: "Contoura Vision & Retinal Care", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80", rating: "4.8", desc: "Equipped with latest SMILE and Contoura laser suites." }
            ],
            faqs: [
                { q: "How quickly can I travel after Lasik surgery?", a: "Most patients are cleared to fly within 48 to 72 hours after Contoura Vision or SMILE Lasik." }
            ]
        },

        "cosmetic": {
            slug: "cosmetic",
            title: "Cosmetic & Plastic Surgery",
            category: "Cosmetic",
            heroTitle: "Cosmetic & Plastic Surgery in India",
            heroSub: "Board-certified plastic surgeons offering Rhinoplasty, Liposuction, Hair Transplants, and Facelifts in boutique medical facilities.",
            heroImg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
            overview: "India offers high artistic finesse, privacy, and internationally trained plastic surgeons for aesthetic and reconstructive procedures.",
            aboutText: "Cosmetic procedures combine surgical accuracy with aesthetic design. State-of-the-art cosmetic suites prioritize patient confidentiality, natural results, and comfortable recovery environments.",
            duration: "4 - 10 Days",
            subcategories: ["FUE & Sapphire Hair Transplant", "Rhinoplasty (Nose Reshaping)", "Liposuction & Body Contouring", "Facelift & Neck Lift", "Breast Augmentation / Reduction"],
            processSteps: [
                { num: "01", title: "Initial Information", desc: "Share high-res photographs and cosmetic goals confidentially." },
                { num: "02", title: "Medical Document Review", desc: "Plastic surgeon evaluates tissue structure and expectations." },
                { num: "03", title: "Hospital Coordination", desc: "Virtual consultation and treatment plan proposal." },
                { num: "04", title: "Treatment Planning", desc: "Schedule procedure date, post-op garments, and stay." },
                { num: "05", title: "Travel Coordination", desc: "Private recovery suite booking and airport pickup." },
                { num: "06", title: "Clinic Visit / Surgery", desc: "Procedure execution, rest period, and suture removal." }
            ],
            whyIndia: [
                { title: "Board-Certified Plastic Surgeons", desc: "Surgeons holding international aesthetic board memberships." },
                { title: "Advanced FUE & Sapphire Hair Tech", desc: "High-density graft extraction with natural hairline design." },
                { title: "Private Recovery Suites", desc: "Discreet boutique accommodation designed for post-op rest." },
                { title: "3D Aesthetic Simulation", desc: "Pre-procedure visual modeling for predictable outcomes." },
                { title: "Comprehensive Post-Op Care", desc: "Lymphatic drainage massage and scar management." },
                { title: "Convenient Hubs", desc: "Clinics in Mumbai, Delhi, Bengaluru, and Hyderabad." }
            ],
            hospitals: [
                { name: "Cocoona Centre for Aesthetic Transformation", city: "Delhi", specialty: "Body Contouring & Hair Transplant", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "Boutique aesthetic facility with ultra-modern surgical suites." }
            ],
            faqs: [
                { q: "Is cosmetic surgery consultation confidential?", a: "100%. All images, clinical details, and identity information are protected under strict medical privacy standards." }
            ]
        },

        "dental": {
            slug: "dental",
            title: "Dental Implants & Restorative Dentistry",
            category: "Dental",
            heroTitle: "Dental Tourism in India",
            heroSub: "All-on-4 dental implants, porcelain veneers, digital smile design, and painless root canal treatments.",
            heroImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
            overview: "India is a premier location for dental holidays, featuring CAD/CAM dental labs, 3D CBCT imaging, and instant implant restorations.",
            aboutText: "Modern dental clinics utilize 3D intraoral scanners, laser dentistry, and computer-guided implantology allowing full-mouth rehabilitation in short timeframes.",
            duration: "3 - 7 Days",
            subcategories: ["All-on-4 / All-on-6 Implants", "Porcelain Veneers & Smile Makeover", "CAD/CAM Zirconia Crowns", "Laser Root Canal Treatment"],
            processSteps: [
                { num: "01", title: "Initial Information", desc: "Send dental OPG X-ray or intraoral photographs." },
                { num: "02", title: "Medical Document Review", desc: "Prosthodontist and implantologist assessment." },
                { num: "03", title: "Hospital Coordination", desc: "Digital treatment plan and fixture selection." },
                { num: "04", title: "Treatment Planning", desc: "Match clinic appointments with local city tours." },
                { num: "05", title: "Travel Coordination", desc: "Boutique hotel booking near clinic." },
                { num: "06", title: "Clinic Visit / Treatment", desc: "Implant placement, scanning, and crown fitting." }
            ],
            whyIndia: [
                { title: "3D CBCT & Intraoral Scanners", desc: "Precision computer-guided implant placement." },
                { title: "In-House CAD/CAM Dental Labs", desc: "Same-day zirconia crown fabrication." },
                { title: "Renowned Implantologists", desc: "Specialists certified in Noble Biocare and Straumann systems." },
                { title: "Painless Dental Procedures", desc: "Conscious sedation and laser-assisted dentistry." },
                { title: "Combine Treatment with Tourism", desc: "Enjoy sightseeing while waiting for lab crown fabrication." },
                { title: "Major Urban Centers", desc: "Delhi, Mumbai, Goa, Bengaluru, and Kerala." }
            ],
            hospitals: [
                { name: "Clove Dental Flagship Centers", city: "Delhi NCR", specialty: "Implantology & Digital Dentistry", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80", rating: "4.8", desc: "India's largest dental network with ISO-certified sterilizations." }
            ],
            faqs: [
                { q: "How long do All-on-4 dental implants take?", a: "With computer-guided implantology, immediate temporary teeth can be placed within 48 to 72 hours of surgery." }
            ]
        },

        "wellness": {
            slug: "wellness",
            title: "Ayurveda & Holistic Wellness",
            category: "Wellness",
            heroTitle: "Ayurveda & Wellness Retreats in India",
            heroSub: "Authentic Panchakarma detoxification, therapeutic yoga, stress management, and traditional healing in serene resort settings.",
            heroImg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
            overview: "Experience authentic Ayurvedic healing in Kerala and the Himalayan foothills, overseen by certified Vaidyas (Ayurvedic doctors).",
            aboutText: "Ayurvedic wellness involves personalized diagnostic evaluation (Prakriti analysis), therapeutic massage oils, herbal medicines, organic diet plans, and daily meditation routines.",
            duration: "7 - 21 Days",
            subcategories: ["Panchakarma Detoxification", "Rejuvenation & Anti-Aging", "Spine & Joint Care Wellness", "Stress & Weight Management"],
            processSteps: [
                { num: "01", title: "Initial Information", desc: "Share wellness goals and health history." },
                { num: "02", title: "Medical Document Review", desc: "Ayurvedic physician prescribes initial wellness program." },
                { num: "03", title: "Hospital Coordination", desc: "Select resort retreat in Kerala or Rishikesh." },
                { num: "04", title: "Treatment Planning", desc: "Personalized dietary and therapy schedule formulation." },
                { num: "05", title: "Travel Coordination", desc: "Retreat transfers and e-Visa coordination." },
                { num: "06", title: "Retreat Visit", desc: "Daily Panchakarma therapies, yoga, and organic dining." }
            ],
            whyIndia: [
                { title: "Birthplace of Ayurveda", desc: "Century-old lineage of authentic Vedic healing sciences." },
                { title: "Certified Ayurvedic Doctors", desc: "Qualified BAMS/MD Vaidyas overseeing every therapy." },
                { title: "Serene Natural Settings", desc: "Backwaters of Kerala, tea gardens of Munnar, or Ganges riverbanks in Rishikesh." },
                { title: "Customized Organic Diets", desc: "Freshly prepared sattvic meals aligned with your Dosha type." },
                { title: "Integrated Yoga & Meditation", desc: "Daily guided sessions by experienced yoga masters." },
                { title: "Serene Recovery", desc: "Ideal environment for mental relaxation and cellular restoration." }
            ],
            hospitals: [
                { name: "Somatheeram Ayurveda Village", city: "Kerala", specialty: "Panchakarma & Rejuvenation", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "World's first Ayurvedic resort situated on Malabar beach cliffs." }
            ],
            faqs: [
                { q: "What is Panchakarma?", a: "Panchakarma is a 5-step traditional Ayurvedic detoxification process that cleanses toxins from body tissues." }
            ]
        },

        "bariatric": {
            slug: "bariatric",
            title: "Bariatric & Metabolic Surgery",
            category: "Weight Loss",
            heroTitle: "Bariatric & Weight Loss Surgery in India",
            heroSub: "Laparoscopic sleeve gastrectomy, gastric bypass, and metabolic surgery supported by clinical bariatric nutritionists.",
            heroImg: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
            overview: "India's bariatric surgery centers offer safe, minimally invasive procedures for long-term weight management and diabetes resolution.",
            aboutText: "Bariatric procedures utilize keyhole laparoscopic techniques, reducing post-operative pain and hospitalization. Integrated teams of surgeons, endocrinologists, and dietitians support long-term metabolic health.",
            duration: "7 - 10 Days",
            subcategories: ["Laparoscopic Sleeve Gastrectomy", "Roux-en-Y Gastric Bypass", "Mini Gastric Bypass", "Intragastric Balloon Insertion"],
            processSteps: [
                { num: "01", title: "Initial Information", desc: "Submit BMI, medical history, and weight loss attempts." },
                { num: "02", title: "Medical Document Review", desc: "Bariatric team reviews endocrine and metabolic profile." },
                { num: "03", title: "Hospital Coordination", desc: "Formulate surgery and pre-op liquid diet schedule." },
                { num: "04", title: "Treatment Planning", desc: "Pre-surgery clearance by pulmonologist and cardiologist." },
                { num: "05", title: "Travel Coordination", desc: "Hotel stay with customized post-op diet support." },
                { num: "06", title: "Hospital Visit / Surgery", desc: "Laparoscopic procedure (2-3 days hospital stay) and diet transition." }
            ],
            whyIndia: [
                { title: "Specialized Bariatric Institutes", desc: "Centres of Excellence in Metabolic and Bariatric Surgery." },
                { title: "Minimally Invasive Keyhole Tech", desc: "Laparoscopic and robotic single-incision techniques." },
                { title: "Comprehensive Metabolic Care", desc: "Simultaneous management of Type-2 diabetes, sleep apnea, and fatty liver." },
                { title: "Dedicated Clinical Nutritionists", desc: "Multi-phase dietary plans for smooth transition." },
                { title: "Affordable Bariatric Packages", desc: "High quality care at a fraction of Western costs." },
                { title: "Metro Flight Connections", desc: "Delhi, Mumbai, Chennai, and Bengaluru." }
            ],
            hospitals: [
                { name: "Max Institute of Minimal Access Surgery", city: "Delhi", specialty: "Laparoscopic Gastric Sleeve & Bypass", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80", rating: "4.9", desc: "Renowned institute led by international bariatric pioneers." }
            ],
            faqs: [
                { q: "How long is the hospital stay for sleeve gastrectomy?", a: "Typically 2 to 3 days in the hospital, followed by 4 to 5 days of outpatient monitoring." }
            ]
        }
    },

    getTreatment: function(slug) {
        if (!slug) slug = "cardiology";
        const key = slug.toLowerCase();
        return this.treatments[key] || this.treatments["cardiology"];
    },

    // Local Storage Applications DB
    getApplications: function() {
        let apps = JSON.parse(localStorage.getItem('traviora_medical_apps'));
        if (!apps || !Array.isArray(apps) || apps.length === 0) {
            apps = [
                {
                    applicationId: "MT-2026-001245",
                    status: "SUBMITTED",
                    createdAt: "2026-09-17 14:30",
                    treatmentSlug: "cardiology",
                    treatmentName: "Cardiology & Cardiac Surgery",
                    patient: {
                        firstName: "Amina",
                        middleName: "Bint",
                        lastName: "Al-Mansoor",
                        dob: "1984-05-14",
                        gender: "Female",
                        country: "United Arab Emirates",
                        nationality: "Emirati",
                        mobile: "+971 50 123 4567",
                        whatsapp: "+971 50 123 4567",
                        email: "amina.almansoor@example.com",
                        address: "Al Wasl Road, Villa 42",
                        city: "Dubai",
                        state: "Dubai",
                        postalCode: "00000",
                        emergencyName: "Tariq Al-Mansoor",
                        emergencyMobile: "+971 50 987 6543",
                        relationship: "Spouse"
                    },
                    passport: {
                        passportNumber: "N8264019",
                        issuingCountry: "United Arab Emirates",
                        issueDate: "2021-03-10",
                        expiryDate: "2031-03-09",
                        placeOfBirth: "Dubai",
                        fileName: "Passport_Scan_Amina.pdf"
                    },
                    treatmentDetails: {
                        treatment: "Cardiology & Cardiac Surgery",
                        subcategory: "Coronary Artery Bypass Grafting (CABG)",
                        preferredDate: "2026-10-15",
                        preferredHospital: "Apollo Hospitals",
                        preferredDoctor: "Dr. Y. Vijayachandra Reddy",
                        preferredCity: "Chennai",
                        previousConsultation: "Yes",
                        reason: "Recommended CABG surgery for triple vessel disease following angiogram.",
                        additionalInfo: "Patient prefers private executive room and English speaking attendant."
                    },
                    medicalInformation: {
                        diagnosis: "Triple Vessel Coronary Artery Disease",
                        condition: "Moderate chest discomfort on exertion, controlled hypertension.",
                        dateOfDiagnosis: "2026-07-20",
                        previousTreatment: "Medication management (Beta blockers, Statins)",
                        previousSurgery: "None",
                        currentMedication: "Aspirin 75mg, Atorvastatin 40mg, Metoprolol 50mg",
                        allergies: "Penicillin",
                        existingConditions: "Hypertension (Controlled)",
                        previousHospitalization: "July 2026 for diagnostic angiography",
                        additionalInfo: "Sensitive medical file provided. Confidentiality requested."
                    },
                    documents: [
                        { name: "Angiography_Report_Jul2026.pdf", type: "PDF Report", size: "2.4 MB", status: "Uploaded ✓" },
                        { name: "ECG_Echocardiogram.pdf", type: "Diagnostic Scan", size: "1.8 MB", status: "Uploaded ✓" },
                        { name: "Blood_Work_Complete.pdf", type: "Lab Report", size: "950 KB", status: "Uploaded ✓" }
                    ],
                    travelRequirements: {
                        visaAssistance: "Yes",
                        hotelRequired: "Required",
                        hotelNights: "12",
                        hotelCategory: "5-Star Luxury Suite",
                        airportPickup: "Required",
                        localTransport: "Required",
                        interpreterRequired: "Required",
                        companion: "Traveling with companion",
                        companionCount: "1",
                        arrivalDate: "2026-10-12",
                        departureDate: "2026-10-26",
                        additionalRequirements: "Requires wheelchair assistance at airport arrival and medical escort to hotel."
                    },
                    package: null,
                    timeline: [
                        { status: "SUBMITTED", title: "Application Submitted", date: "2026-09-17 14:30", desc: "Patient completed and submitted full medical tourism application." }
                    ]
                },
                {
                    applicationId: "MT-2026-008912",
                    status: "PACKAGE_OFFERED",
                    createdAt: "2026-09-16 11:15",
                    treatmentSlug: "orthopedics",
                    treatmentName: "Orthopedic Surgery & Joint Care",
                    patient: {
                        firstName: "David",
                        middleName: "Chukwuma",
                        lastName: "Okonkwo",
                        dob: "1976-11-22",
                        gender: "Male",
                        country: "Nigeria",
                        nationality: "Nigerian",
                        mobile: "+234 803 123 4567",
                        whatsapp: "+234 803 123 4567",
                        email: "david.okonkwo@example.ng",
                        address: "Victoria Island",
                        city: "Lagos",
                        state: "Lagos",
                        postalCode: "101241",
                        emergencyName: "Grace Okonkwo",
                        emergencyMobile: "+234 803 987 6543",
                        relationship: "Wife"
                    },
                    passport: {
                        passportNumber: "A09182374",
                        issuingCountry: "Nigeria",
                        issueDate: "2022-01-15",
                        expiryDate: "2032-01-14",
                        placeOfBirth: "Lagos",
                        fileName: "Passport_David_Okonkwo.pdf"
                    },
                    treatmentDetails: {
                        treatment: "Orthopedic Surgery & Joint Care",
                        subcategory: "Robotic Knee Replacement",
                        preferredDate: "2026-10-20",
                        preferredHospital: "Max Institute of Musculoskeletal Sciences",
                        preferredDoctor: "Dr. S. K. S. Marya",
                        preferredCity: "Delhi",
                        previousConsultation: "Yes",
                        reason: "Severe osteoarthritis in right knee causing limited mobility.",
                        additionalInfo: "Requires ground floor or elevator hotel accommodation."
                    },
                    medicalInformation: {
                        diagnosis: "Grade 4 Osteoarthritis Right Knee",
                        condition: "Severe joint space narrowing, pain during weight bearing.",
                        dateOfDiagnosis: "2025-11-10",
                        previousTreatment: "Intra-articular injections, physical therapy",
                        previousSurgery: "None",
                        currentMedication: "Analgesics, Glucosamine",
                        allergies: "None",
                        existingConditions: "None",
                        previousHospitalization: "None",
                        additionalInfo: "Fit for surgery."
                    },
                    documents: [
                        { name: "Knee_XRay_Right.pdf", type: "X-Ray Image", size: "3.1 MB", status: "Uploaded ✓" },
                        { name: "Orthopedic_Consultation_Note.pdf", type: "Medical Note", size: "1.2 MB", status: "Uploaded ✓" }
                    ],
                    travelRequirements: {
                        visaAssistance: "Yes",
                        hotelRequired: "Required",
                        hotelNights: "10",
                        hotelCategory: "4-Star Deluxe",
                        airportPickup: "Required",
                        localTransport: "Required",
                        interpreterRequired: "Not Required",
                        companion: "Traveling with companion",
                        companionCount: "1",
                        arrivalDate: "2026-10-18",
                        departureDate: "2026-10-28",
                        additionalRequirements: "Requires wheelchair at airport and vehicle with easy entry."
                    },
                    package: {
                        medicalCost: 380000, // INR
                        hospitalName: "Max Super Speciality Hospital, Delhi NCR",
                        doctorName: "Dr. S. K. S. Marya (Chairman - Orthopedics)",
                        treatmentSummary: "Robotic Total Knee Replacement (Unilateral) with US-FDA approved Oxinium high-durability implant, 4 nights inpatient hospital stay (Private Deluxe Room), pre-op clearance, implant charges, operating room, surgeon fees, and inpatient physiotherapy.",
                        estimatedDuration: "10 Days Total (4 Days Hospital + 6 Days Recovery Hotel)",
                        hotelName: "Radisson Blu Suites (Delhi NCR)",
                        hotelRoomType: "Deluxe Executive Suite with Attendant Bed",
                        hotelNights: 10,
                        hotelCost: 65000,
                        airportPickupCost: 3500,
                        localTransportCost: 7000,
                        visaAssistanceCost: 4500,
                        interpreterCost: 0,
                        travioraFee: 25000,
                        discount: 15000,
                        totalCost: 469900
                    },
                    timeline: [
                        { status: "SUBMITTED", title: "Application Submitted", date: "2026-09-16 11:15", desc: "Application submitted online." },
                        { status: "CONTACTED", title: "Traviora Contacted Patient", date: "2026-09-16 14:00", desc: "Traviora care manager reached out via WhatsApp and discussed medical documents." },
                        { status: "PACKAGE_OFFERED", title: "Treatment Package Offered", date: "2026-09-17 09:30", desc: "Comprehensive treatment package prepared and offered to patient for review." }
                    ]
                }
            ];
            localStorage.setItem('traviora_medical_apps', JSON.stringify(apps));
        }
        return apps;
    },

    getApplicationById: function(id) {
        if (!id) return null;
        const apps = this.getApplications();
        return apps.find(a => a.applicationId === id.trim()) || null;
    },

    saveApplication: function(appData) {
        const apps = this.getApplications();
        const index = apps.findIndex(a => a.applicationId === appData.applicationId);
        if (index >= 0) {
            apps[index] = appData;
        } else {
            apps.unshift(appData);
        }
        localStorage.setItem('traviora_medical_apps', JSON.stringify(apps));
        localStorage.setItem('traviora_current_app_id', appData.applicationId);
    },

    updateStatus: function(id, newStatus, logTitle, logDesc) {
        const app = this.getApplicationById(id);
        if (!app) return null;
        app.status = newStatus;
        const now = new Date();
        const dateStr = now.toISOString().replace('T', ' ').substring(0, 16);
        app.timeline.push({
            status: newStatus,
            title: logTitle || `Status updated to ${newStatus}`,
            date: dateStr,
            desc: logDesc || `Application status transitioned to ${newStatus}.`
        });
        this.saveApplication(app);
        return app;
    },

    savePackage: function(id, packageData) {
        const app = this.getApplicationById(id);
        if (!app) return null;
        app.package = packageData;
        app.status = "PACKAGE_OFFERED";
        const now = new Date();
        const dateStr = now.toISOString().replace('T', ' ').substring(0, 16);
        app.timeline.push({
            status: "PACKAGE_OFFERED",
            title: "Treatment Package Offered",
            date: dateStr,
            desc: `Traviora created and offered a comprehensive treatment package (Est. Total: ₹${Number(packageData.totalCost).toLocaleString('en-IN')}).`
        });
        this.saveApplication(app);
        return app;
    },

    acceptPackage: function(id) {
        const app = this.getApplicationById(id);
        if (!app) return null;
        app.status = "ACCEPTED";
        const now = new Date();
        const dateStr = now.toISOString().replace('T', ' ').substring(0, 16);
        app.timeline.push({
            status: "ACCEPTED",
            title: "Package Accepted by Customer",
            date: dateStr,
            desc: "Customer accepted the offered treatment package. Traviora team initiated hospital and travel coordination."
        });
        this.saveApplication(app);
        return app;
    }
};

window.TravioraMedicalDb = TravioraMedicalDb;
