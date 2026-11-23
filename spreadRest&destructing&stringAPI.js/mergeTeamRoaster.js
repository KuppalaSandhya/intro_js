const defaultMentors = ["Vikram", "Priya"];
const mergeTeamRoster = function (teamLead = "unAssigned", ...members) {
  const lead = teamLead;
  const memberCount = members.length;
  const fullRoster = [teamLead, ...members, ...defaultMentors];

  return {lead, memberCount, fullRoster};
};
console.log(mergeTeamRoster("Aarav", "Riya", "Kabir", "Meera"));
