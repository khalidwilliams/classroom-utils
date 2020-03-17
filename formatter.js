const formatter = {
  bullet: function(groups) {
    const stringifiedGroups = groups.map(group => {
      return `* ${group.join(', ')}`
    })
    const joinedGroups = stringifiedGroups.join('\n');
    console.log(joinedGroups);
  }
};

module.exports = formatter;
