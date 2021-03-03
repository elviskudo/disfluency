<div class="row"></div>
<div class="row">
<div class="col-2"></div>
<div class="col">
    <div class="card">
        <div class="card-header text-white bg-primary mb-3">Psiko Test - Admin</div>
        <div class="card-body">
            <h4>Monitoring Quiz</h4>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Card</th>
                        <th>Yes</th>
                        <th>No</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($analythic as $a): ?>
                    <tr>
                        <td><?php echo $a->name ?></td>
                        <td><?php echo $a->email ?></td>
                        <td><?php echo $a->card ?></td>
                        <td><?php echo $a->yes ?></td>
                        <td><?php echo $a->no ?></td>
                    </tr>
                    <?php endforeach ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
<div class="col-2"></div>
