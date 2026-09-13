// d:\Traviora\Traviora-demo2-webpage\js\visa-eligibility.js

window.TravioraEligibility = {
    check(params) {
        const { destination, nationality, arrivalDate, departureDate, passportExpiryDate } = params;
        
        if (!destination || !nationality) {
            return { eligible: false, status: "NOT_SUPPORTED", reason: "MISSING_DATA" };
        }

        // Find the applicable rule
        const rule = window.TravioraVisaData.visaRules.find(r => 
            r.destination === destination && 
            r.nationality === nationality && 
            r.status === "PUBLISHED"
        );

        if (!rule) {
            return { eligible: false, status: "NOT_SUPPORTED", reason: "NO_RULE_FOUND" };
        }

        // Parse and validate dates (Expected format "DD-MM-YYYY" from UI, or JS Dates for API)
        let duration = -1;
        if (arrivalDate && departureDate) {
            const arrParts = arrivalDate.split('-');
            const depParts = departureDate.split('-');
            if (arrParts.length === 3 && depParts.length === 3) {
                const arr = new Date(arrParts[2], arrParts[1] - 1, arrParts[0]);
                const dep = new Date(depParts[2], depParts[1] - 1, depParts[0]);
                
                if (dep <= arr) {
                    return { eligible: false, status: "NOT_ELIGIBLE", reason: "INVALID_DATES", errors: ["Departure date must be after arrival date."] };
                }
                
                duration = Math.ceil((dep - arr) / (1000 * 60 * 60 * 24));
                if (duration > rule.eligibility.maxStayDays) {
                    return { eligible: false, status: "NOT_ELIGIBLE", reason: "STAY_EXCEEDS_MAX", errors: [`Your trip (${duration} days) exceeds the maximum allowed stay of ${rule.eligibility.maxStayDays} days.`] };
                }
            }
        }

        // Passport Validity Check (Skip for now if passportExpiryDate isn't passed from UI during initial check)
        if (passportExpiryDate && rule.eligibility.minimumPassportValidityDays) {
            // Further complex date logic...
        }

        let nextAction = "APPLY";
        if (rule.routeType === "VISA_FREE") nextAction = "TRAVEL_DETAILS";
        else if (rule.routeType === "VISA_ON_ARRIVAL") nextAction = "TRAVEL_DETAILS";

        // Enrich documents with definitions
        const enrichedDocuments = rule.documents.map(docReq => {
            const def = window.TravioraVisaData.documentDefinitions[docReq.id];
            return { ...def, required: docReq.required };
        });

        return {
            eligible: true,
            status: rule.routeType,
            routeType: rule.routeType, // Normalized field identical to status for clarity
            ruleId: rule.id,
            maxStay: rule.eligibility.maxStayDays,
            duration: duration,
            fees: rule.fees,
            documents: enrichedDocuments,
            processing: rule.processing,
            workflow: rule.workflow,
            nextAction: nextAction
        };
    }
};
